import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showLogOut: boolean = false;
  constructor(
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.checkforuser();
  }

  Logout() {
    localStorage.removeItem("user");
    this.routes.navigate(['/login']);
  }

  checkforuser() {
    this.routes.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === "/login") {
          this.showLogOut = false;
        }
        else {
          this.showLogOut = true;
        }
      });
  }
}
