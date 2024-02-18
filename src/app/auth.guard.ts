import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private router:Router){}

    token:any;
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return this.router.createUrlTree(['/login']); // Rediriger vers la page de connexion
        }
    }
}
