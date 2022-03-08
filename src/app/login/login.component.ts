import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authS: AuthService) {
    
   }

  ngOnInit(): void {
  }

  needsLogin()
  {
    console.log('Needs login');
    console.log(!this._authS.isAuthenticated());
    console.log('*****')
    return !this._authS.isAuthenticated();
  }

}
