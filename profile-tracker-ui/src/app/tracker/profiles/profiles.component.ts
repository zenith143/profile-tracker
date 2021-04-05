import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profiles } from '../models/profiles.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  profiles: any = new Array<Profiles>();
  selectedProfile:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/mock-Json/profiles.json").subscribe((data: any) => {
      if (!!data) {
        data.forEach((p: any) => {
          let user = new Profiles();
          user.status = p.Status;
          user.skills = p.Skills.split(',');
          user.profileImageUrl = p.ProfileImageUrl;
          user.name = p.Name;
          user.id = p.Id;
          user.currentRole = p.CurrentRole;
          this.profiles.push(user);
        });
      }
    });
  }

  onSelectedProfile(profile: any) {
    this.selectedProfile = new Profiles();
    this.selectedProfile = profile;
  }
}
