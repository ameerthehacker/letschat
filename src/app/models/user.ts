export class User {
    public uid: string;
    public displayName: string;
    public email: string;
    public photoURL: string;
    public threads: Object[];
    public online: boolean;
    public lastSeen: number;
    public lastSeenInWords: string;
    public typing: boolean;
}