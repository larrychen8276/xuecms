package com.xuecms.modules.security.service;

import lombok.RequiredArgsConstructor;
import com.xuecms.exception.BadRequestException;
import com.xuecms.exception.EntityNotFoundException;
import com.xuecms.modules.security.config.bean.LoginProperties;
import com.xuecms.modules.security.service.dto.JwtUserDto;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.service.DataService;
import com.xuecms.modules.system.service.RoleService;
import com.xuecms.modules.system.service.UserService;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RequiredArgsConstructor
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {
	
    private final UserService userService;
    
    private final RoleService roleService;
    private final DataService dataService;
    private final LoginProperties loginProperties;
    
    public void setEnableCache(boolean enableCache) {
        this.loginProperties.setCacheEnable(enableCache);
    }

    /**
     * 用户信息缓存
     *
     * @see {@link UserCacheClean}
     */
    static Map<String, JwtUserDto> userDtoCache = new ConcurrentHashMap<>();

    @Override
    public JwtUserDto loadUserByUsername(String username) {
        boolean searchDb = true;
        JwtUserDto jwtUserDto = null;
        if (loginProperties.isCacheEnable() && userDtoCache.containsKey(username)) {
            jwtUserDto = userDtoCache.get(username);
            searchDb = false;
        }
        if (searchDb) {
        	User user;
            try {
//                user = userService.findByName(username);
            	user = userService.findByName(username);
            } catch (EntityNotFoundException e) {
                // SpringSecurity会自动转换UsernameNotFoundException为BadCredentialsException
                throw new UsernameNotFoundException("", e);
            }
            if (user == null) {
                throw new UsernameNotFoundException("");
            } else {
                if (!user.getEnabled()) {
                    throw new BadRequestException("账号未激活！");
                }
                jwtUserDto = new JwtUserDto(
                        user,
//                        dataService.getDeptIds(user),
                        dataService.getDeptIds(user),
//                        roleService.mapToGrantedAuthorities(user)
                        roleService.mapToGrantedAuthorities(user)
                );
                userDtoCache.put(username, jwtUserDto);
            }
        }
        return jwtUserDto;
    }
}
