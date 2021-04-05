import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RolesComponent } from './roles/roles.component';
import { TrackerRoutingModule } from './tracker-routing.module';
import { AuthentiationGuardService } from './services/authentication-guard.service';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    TrackerComponent,
    ProfilesComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    MatChipsModule
  ],
  providers: [
    AuthentiationGuardService
  ]
})
export class TrackerModule { }
