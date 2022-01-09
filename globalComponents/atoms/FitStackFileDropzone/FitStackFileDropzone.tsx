import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useStore } from '../../../stores/store';
import FitStackDeleteButton from '../FitStackDeleteButton/FitStackDeleteButton';
import s from './FitStackFileDropzone.module.css'

const FitStackFileDropzone = (props: any) => {
    const {applicationStore} = useStore();

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    
    return (
        <div className={s.container} >
            <Dropzone
            onDropAccepted={(acceptedFiles: File[]) => {
                if(selectedFiles.length === props.maxFiles){
                    let newFiles = selectedFiles;
                    newFiles[selectedFiles.length - 1] = acceptedFiles[0];
                    setSelectedFiles(newFiles);
                    props.onDrop(newFiles);
                }else{
                    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
                    let newFiles: File[] = [...selectedFiles, ...acceptedFiles];
                    props.onDrop(newFiles);
                }
            }}
            multiple={false}
            accept={props.accept}
            maxFiles={props.maxFiles}
        >
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()} className={s.labelContainer} >
                    <input {...getInputProps()} className={s.input} />
                    {selectedFiles.length === 0 &&
                        <p className={s.dragFilesText} >Drop files here or click to select files</p>
                    }
                    {selectedFiles.length > 0 && 
                    <div className={s.fileListContainer} >
                        {selectedFiles.map((file) => {
                        return(
                            <div key={file.name} className={s.fileContainer} >
                                <div className={s.selectedFileText} >Selected File:</div>
                                <div className={s.fileName} >{file.name}</div>
                                <div className={s.deleteButtonConatiner} >
                                    <FitStackDeleteButton onClick={(event: React.MouseEvent<HTMLButtonElement>) =>{ 
                                        event.stopPropagation();
                                        setSelectedFiles(selectedFiles.filter(f => f.name !== file.name))
                                        props.onDrop(selectedFiles.filter(f => f.name !== file.name))
                                    }}/>
                                </div>
                            </div> 
                        )
                                       
                    })}
                    </div>
                                                             
                }
                </div>

            )}

        </Dropzone>
        </div>
        
    )
}

export default observer(FitStackFileDropzone)


