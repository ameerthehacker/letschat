import { User } from "../models/user";

export class Thread {
    public thread: string;
    public user: User;
    public newMessagesCount: number;
    public lastMessage: string;
}