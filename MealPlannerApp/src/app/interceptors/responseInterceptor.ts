import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    intercept(res: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(res).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                let token = event.headers.get('Authorization')
                if (token != null) {
                    localStorage.setItem('Authorization', token)
                }
            }
            return event;
        }));
    }
    
}