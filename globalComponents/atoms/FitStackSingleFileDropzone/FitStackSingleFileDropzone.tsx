import { observer } from 'mobx-react-lite';
import React from 'react';
import Dropzone from 'react-dropzone';
import { createUseStyles } from 'react-jss';
import { useStore } from '../../../stores/store';
import FitStackDeleteButton from '../FitStackDeleteButton/FitStackDeleteButton';
import s from './FitStackSingleFileDropzone.module.css'

const FitStackSingleFileDropzone = (props: any) => {
    const {applicationStore} = useStore();
    
    return (
        <div className={s.container} >
            <Dropzone
            onDropAccepted={(acceptedFiles: File[]) => {
                applicationStore.setSelectedResumeFile(acceptedFiles[0]);
                props.onDrop(acceptedFiles[0]);
            }}
            multiple={false}
            accept={props.accept}
            maxFiles={props.maxFiles}
        >
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()} className={s.labelContainer} >
                    <input {...getInputProps()} className={s.input} />
                    {applicationStore.selectedResumeFile === undefined &&
                        <p className={s.dragFilesText} >Drop files here or click to select files</p>
                    }
                    {applicationStore.selectedResumeFile !== undefined && 
                    <div className={s.fileListContainer} >
                            <div className={s.fileContainer} >
                                <div className={s.selectedFileText} >Selected File:</div>
                                <div className={s.fileName} >{applicationStore.selectedResumeFile.name}</div>
                                <div className={s.deleteButtonConatiner} >
                                    <FitStackDeleteButton onClick={(event: React.MouseEvent<HTMLButtonElement>) =>{ 
                                        event.stopPropagation();
                                        applicationStore.removeSelectedResumeFile();
                                    }}/>
                                </div>
                            </div>                   
                    </div>
                                                             
                }
                </div>

            )}

        </Dropzone>
        </div>
        
    )
}

export default observer(FitStackSingleFileDropzone)
