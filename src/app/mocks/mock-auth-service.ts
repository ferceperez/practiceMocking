export class MockAuthService
{
    authenticated: boolean = true;
    isAuthenticated(){
        return this.authenticated;
    }
}