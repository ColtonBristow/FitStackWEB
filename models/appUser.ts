import { Token } from "graphql";
import { Group } from "./group";

export interface AppUser {
    appUserId: string,
    firstName: string,
    lastName: string,
    token: string,
    displayName: string,
    userName: string,
    goalType: GoalType,
    monthlyCalMaintenance: number,
    calorieIntake: number,
    role: AppRole,
    groups: Group[]
    friends: AppUser[],
    dateOfBirth: Date,
    height: number,
    heightMeasurementType: HeightType,
    weight: number,
    weightMeasurementType: WeightType,
    phoneNumber: string,
}

export enum HeightType {
    Inches,
    Centimeters,
}

export enum WeightType {
    Pounds,
    Kilograms,
}

export enum GoalType {
    Weightloss,
    Bulk,
    Lean,
    Shredded,
    General,
    Professional,
}

export enum AppRole {
    User,
    Moderator,
    Sponsor,
    Admin,
    Super,
}