import { Routes } from "@angular/router";
import { AUTH_ROUTE } from "./auth.route";
import { HomeComponent } from "../components/home/home.component";

import { AuthGuard } from "../guards/auth/auth.guard";

export const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'auth', children: AUTH_ROUTE }
];