import { AppUser } from "./appUser";
import { Program } from "./program";
import { UserRole } from "./userRole";

export interface Group {
    id: string,
    name: string,
    programs: Program[],
    users: AppUser[],
    userRoles: UserRole[],
    isDeleted: boolean,
}