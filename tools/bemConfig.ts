import { PureComponent } from 'react';
import { Config } from '@redneckz/react-bem-helper';

export function configureBEM(): void {
    Config.ELEMENT_SEPARATOR = '__';
    Config.MODIFIER_SEPARATOR = '_';
    Config.ASSERTION_ENABLED = process.env.NODE_ENV === 'development';
    Config.COMPONENT_BASE_CLASS = PureComponent;
}