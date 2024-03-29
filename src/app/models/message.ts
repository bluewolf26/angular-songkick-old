export enum Type {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    light = 'light',
    dark = 'dark',
}

export class Message {
  constructor(public type: Type, public text: string) { }
}
