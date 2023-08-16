import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(res: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(res).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpRequest && !event.url.includes("/user/login")) {
                let token = localStorage.getItem('Authorization')
                if (token != null) {
                    event.headers.append('Authorization', token)
                }
            }
            return event;
        }));
    }
    
}