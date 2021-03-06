import { Routes } from "@angular/router";
import { AUTH_ROUTE } from "./auth.route";
import { THREADS_ROUTE } from "./threads.route";
import { HomeComponent } from "../components/home/home.component";
import { PeopleComponent } from "../components/people/people.component";

import { AuthGuard } from "../guards/auth/auth.guard";

export const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', children: AUTH_ROUTE },
    { path: 'threads', children: THREADS_ROUTE, canActivate: [AuthGuard] },
    { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] }
];