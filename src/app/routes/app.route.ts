import { Routes } from "@angular/router";
import { AUTH_ROUTE } from "./auth.route";
import { HomeComponent } from "../components/home/home.component";

export const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', children: AUTH_ROUTE }
];