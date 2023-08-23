import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req instanceof HttpRequest && !req.url.includes("/user/login")) {
            let token = localStorage.getItem('Authorization')
            if (token != null) {
                return next.handle(req.clone({ setHeaders: { Authorization: token } }));
            }
        }
        return next.handle(req)
    }
    
    
}