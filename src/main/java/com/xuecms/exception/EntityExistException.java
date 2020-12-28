package com.xuecms.exception;

import org.springframework.util.StringUtils;

public class EntityExistException extends RuntimeException {

	private static final long serialVersionUID = 6993130291006596746L;

	public EntityExistException(Class clazz, String field, String val) {
        super(EntityExistException.generateMessage(clazz.getSimpleName(), field, val));
    }

    private static String generateMessage(String entity, String field, String val) {
        return StringUtils.capitalize(entity)
                + " with " + field + " "+ val + " existed";
    }
}