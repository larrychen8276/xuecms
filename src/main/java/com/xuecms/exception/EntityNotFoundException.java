package com.xuecms.exception;

import org.springframework.util.StringUtils;

public class EntityNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -6854222775011813362L;

	public EntityNotFoundException(Class clazz, String field, String val) {
        super(EntityNotFoundException.generateMessage(clazz.getSimpleName(), field, val));
    }

    private static String generateMessage(String entity, String field, String val) {
        return StringUtils.capitalize(entity)
                + " with " + field + " "+ val + " does not exist";
    }
}