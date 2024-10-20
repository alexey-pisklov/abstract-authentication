export interface Authentication<TCommand, TAuthentication> {
    authenticate(command: TCommand): Promise<TAuthentication>;
}