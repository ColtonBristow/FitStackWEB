import { AppUser } from "./appUser";
import { Exercise } from "./exercise";
import { SuperSet } from "./superSet";

export interface Program {
    id: string,
    creator: AppUser,
    supersets: SuperSet[],
    exercises: Exercise[],
    description: string,
    name: string,
    fitnessType: FitnessType,
    numOfLikes: number,
    numOfDislikes: number,
}

export enum FitnessType {
    Cardio,
    WeightTraining,
    Calisthenics,
    Sport,
}