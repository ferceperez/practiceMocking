import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../service/auth.service';
import { MockAuthService } from '../mocks/mock-auth-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: MockAuthService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => 
  {
    service = new MockAuthService();
    component = new LoginComponent(service);
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when user isnt authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('should return false when user is authenticated', () =>{
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  })
});
