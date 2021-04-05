import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { RolesComponent } from './roles/roles.component';
import { AuthentiationGuardService } from './services/authentication-guard.service';

const routes: Routes = [
    {
        path: 'tracker',
        children: [
            {
                path: '',
                redirectTo: '/profiles',
                pathMatch: 'full'
            },
            {
                path: 'profiles',
                component: ProfilesComponent,
                canActivate: [AuthentiationGuardService]
            },
            {
                path: 'roles',
                component: RolesComponent,
                canActivate: [AuthentiationGuardService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackerRoutingModule { }
