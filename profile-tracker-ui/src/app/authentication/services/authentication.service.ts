import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { RestService } from 'src/app/common/services/rest.service';
import { apiurls } from 'src/app/common/constants/api-url.constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {

    constructor(
        private _restService: RestService
    ) {
    }

    public login(user: any): Observable<any> {
        let headers = {
            "content-type": "application/json",
            "authorization": 'Bearer ' + btoa(user.userName + ":" + user.password)
        }
        // append('Content-Type', "application/json").
        //     append("authorization", 'Bearer' + btoa(user.userName + ":" + user.password));
        return this._restService.post(apiurls.Login, {}, { headers: headers }).pipe(map(data => {
            if (!!data) {
                localStorage.setItem("user", JSON.stringify(data));
                return data;
            }
        })
        );
    }
}

