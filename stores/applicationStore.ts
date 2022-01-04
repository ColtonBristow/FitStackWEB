import { makeAutoObservable, runInAction } from "mobx";

export default class ApplicationStore{
    selectedExampleFiles: File[] = [];
    selectedResumeFile: File | undefined = undefined;
    isDeleting: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    addFilesToSelectedExampleFiles = (files: File[]) => {
        runInAction(() => {
            this.selectedExampleFiles = files;
        })
        console.log("File added");
    }

    removeFileFromSelectedExampleFiles = (file: File) => {
        runInAction(() => {
            this.isDeleting = true;
            this.selectedExampleFiles = this.selectedExampleFiles.filter(f => f.name !== file.name);
            this.isDeleting = false;
        })
    }

    removeAllFilesFromSelectedExampleFiles = () => {
        runInAction(() => {
            this.selectedExampleFiles = [];
        })
    }

    setSelectedResumeFile = (file: File) => {
        runInAction(() => {
            this.selectedResumeFile = file;
        })
    }

    removeSelectedResumeFile = () => {
        runInAction(() => {
            this.selectedResumeFile = undefined;
        })
    }
}