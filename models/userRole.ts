import { StringIterator } from "lodash";

export interface UserRole {
    id: string,
    groupId: string,
    role: GroupRole,
    userId: string,
}

export enum GroupRole {
    Member,
    Moderator,
    Admin,
    Owner,
}