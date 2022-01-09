import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import{useDropzone} from 'react-dropzone'
import { reject } from 'lodash';
import s from './FileDropzone.module.css'
import { useStore } from '../../../stores/store';
import FitStackDeleteButton from '../FitStackDeleteButton/FitStackDeleteButton';

const FileDropzone = (props: any) => {
    const {applicationStore} = useStore();
    //comment
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [progress, setProgress] = useState(0);

     const removeFile = (file: File) => {
        console.log("Remove run");
        setSelectedFiles((oldselectedFiles) => reject(oldselectedFiles, {name: file.name }))
    } 

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
    } = useDropzone({multiple: false ,maxFiles: 1, onDrop: () => {
        setSelectedFiles(acceptedFiles);
    },});
          
    return (
        <div>
            <div {...getRootProps({isDragActive, isDragAccept, isDragReject})} className={s.container} >
            <input {...getInputProps()} />
            {selectedFiles.length === 0 &&
                <p className={s.dragFilesText} >Drop files here or click to select files</p>
            }
            {selectedFiles.length > 0 && 
                selectedFiles.map((file) => {
                    return(
                        <div key={file.name} className={s.fileContainer} >
                            <div className={s.selectedFileText} >Selected File:</div>
                            <div className={s.fileName} >{file.name}</div>
                            <FitStackDeleteButton onClick={() =>{removeFile(file)}}/>
                        </div> 
                    )
                       
                })                                         
            }
            </div>


        </div>
    );
    

}

export default observer(FileDropzone)

