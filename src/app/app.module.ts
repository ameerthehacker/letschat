import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth"
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { APP_ROUTE } from "../app/routes/app.route";
import { environment } from "../environments/environment";

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { ThreadListComponent } from './components/threads/thread-list/thread-list.component';
import { ChatBoxComponent } from './components/threads/chat-box/chat-box.component';
import { ChatBubbleComponent } from './components/threads/chat-bubble/chat-bubble.component';
import { UserComponent } from './components/user/user.component';
import { PeopleComponent } from './components/people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ThreadsComponent,
    ThreadListComponent,
    ChatBoxComponent,
    ChatBubbleComponent,
    UserComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
