// Type definitions for condicio v2.0.0
// Project: https://github.com/vivin/condicio
// Definitions by: Felipe Lima <https://github.com/felipepastorelima/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace condicio {
  interface CondicioStatic {
    checkArgument(expression: any, message?: string, arguments?: Array<any>): void;
    checkState(expression: any, message?: string, arguments?: Array<any>): void;
    checkNotNull(expression: any, message?: string, arguments?: Array<any>): void;
    checkNotUndefined(expression: any, message?: string, arguments?: Array<any>): void;
    checkElementIndex(index: number, size: number, message?: string, arguments?: Array<any>): void;
    checkPositionIndex(index: number, size: number, message?: string, arguments?: Array<any>): void;
    checkPositionIndexes(start: number, end: number, size: number, message?: string, arguments?: Array<any>): void;
    checkObjectDirectProperty(object: any, property: string, message?: string, arguments?: Array<any>): void;
    checkObjectProperty(object: any, property: string, message?: string, arguments?: Array<any>): void;
    checkIsBoolean(object: any, message?: string, arguments?: Array<any>): void;
    checkIsNumber(object: any, message?: string, arguments?: Array<any>): void;
    checkIsString(object: any, message?: string, arguments?: Array<any>): void;
    checkIsArray(object: any, message?: string, arguments?: Array<any>): void;
    checkIsObject(object: any, message?: string, arguments?: Array<any>): void;
    checkIsFunction(object: any, message?: string, arguments?: Array<any>): void;
    checkIsType(object: any, type, message?: string, arguments?: Array<any>): void;
    isElementIndexInvalid(index: number, size: number): boolean;
    isNull(reference: any): boolean;
    isUndefined(reference: any): boolean;
    isPositionIndexInvalid(index: number, size: number): boolean;
    arePositionIndexesInvalid(start: number, end: number, size: number): boolean;
    isObjectDirectProperty(object: any, property: string): boolean;
    isObjectProperty(object: any, property: string): boolean;
    isBoolean(object: any): boolean;
    isNumber(object: any): boolean;
    isString(object: any): boolean;
    isArray(object: any): boolean;
    isObject(object: any): boolean;
    isFunction(object: any): boolean;
    isType(object: any): boolean;
    IllegalArgumentError: Error;
    IllegalStateError: Error;
  }
}

declare module 'condicio' {
    var condicio: condicio.CondicioStatic;
    export = condicio;
}

declare var condicio: condicio.CondicioStatic;
