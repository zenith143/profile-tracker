import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../../common/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  newUser: User;

  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  loginUser() {
    // this._authenticationService.login(this.newUser).subscribe((data: any) => {
    //   if (data) {
    //     this.router.navigate(['/tracker/profiles']);
    //   }
    // });
    localStorage.setItem("user","test12345");
    this.router.navigate(['/tracker/profiles']);
  }
}