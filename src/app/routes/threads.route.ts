import { Routes } from "@angular/router";
import { ThreadsComponent } from "../components/threads/threads.component";
import { ChatBoxComponent } from "../components/threads/chat-box/chat-box.component";

export const THREADS_ROUTE: Routes = [
    { path: '', component: ThreadsComponent, children: [
        { path: ':thread_id', component: ChatBoxComponent }
    ]}
];