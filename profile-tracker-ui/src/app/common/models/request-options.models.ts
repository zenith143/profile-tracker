import { HttpHeaders, HttpParams } from "@angular/common/http";

export class RequestOptionsModel {
    public headers: HttpHeaders = new HttpHeaders();
    public params?: HttpParams;
    public body: any;
    public responseType: any;
    public observe: any;
}