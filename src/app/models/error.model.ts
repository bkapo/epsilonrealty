export class ErrorModel {
    ErrorType: ErrorType;
    Message: string;
    Source: string;

    constructor(public errType: ErrorType, public msg: string, public src: string) {
        this.ErrorType = errType;
        this.Message = msg;
        this.Source = src
    }
}

export enum ErrorType {
    'Error' = 1,
    'Warning',
    'NotFound'
}