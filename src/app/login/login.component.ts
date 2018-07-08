import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  loginflag = false;
  password;
  correctpassword = 'akshitparmar';
    public saveloginData(username, password) {
      if (username.valid && password.value === this.correctpassword) {
  console.log('Name : ' + username.value);
  console.log('Password : ' + password.value);
      }
  this.loginflag = true;

    }

    public passupdate(password) {
this.password = password.value;
    }

   public isPasswordIncorrect() {
       if (this.password === this.correctpassword) {
          return false;
       }
       return true;
    }

  ngOnInit() {
  }

}
