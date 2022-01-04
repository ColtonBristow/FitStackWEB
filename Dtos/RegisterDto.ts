import { GoalType, HeightType, WeightType } from "../models/appUser";

export interface RegisterDto {
    displayName: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    goalType: GoalType,
    dateOfBirth: Date,
    height: number,
    heightMeasurementType: HeightType,
    weight: number,
    weightMeasurementType: WeightType,
    phoneNumber: string,
}