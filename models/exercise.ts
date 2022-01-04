import { FitnessType } from "./program";

export interface Exercise{
    id: string,
    fitnessType: FitnessType,
    repetitions: number,
    numOfSets: number,
}