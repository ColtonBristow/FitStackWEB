import { border } from '@mui/system';
import { rejects } from 'assert';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Dropzone, { DropzoneProps, useDropzone} from 'react-dropzone'
import { reject } from 'lodash';

import { createUseStyles } from 'react-jss';
import { Colors } from '../../constants/Colors';
import { useStore } from '../../stores/store';
import FitStackDeleteButton from './FitStackDeleteButton';

const FileDropzone = (props: any) => {
    const styles = useStyles();
    const {applicationStore} = useStore();
    const {selectedApplicationFiles, addFilesToSelectedFiles, 
        removeAllFilesFromSelectedApplicationFiles, removeFileFromSelectedApplicationFiles} = applicationStore;

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
            <div {...getRootProps({isDragActive, isDragAccept, isDragReject})} className={styles.container} >
            <input {...getInputProps()} />
            {selectedFiles.length === 0 &&
                <p className={styles.dragFilesText} >Drop files here or click to select files</p>
            }
            {selectedFiles.length > 0 && 
                selectedFiles.map((file) => {
                    return(
                        <div key={file.name} className={styles.fileContainer} >
                            <div className={styles.selectedFileText} >Selected File:</div>
                            <div className={styles.fileName} >{file.name}</div>
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

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: '2px',
        borderRadius: '2px',
        borderColor: 'black',
        borderStyle:"dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdb",
        outline: 'none',
        minWidth: 500,
        marginTop: 10,
        marginBottom: 10,
    },
    fileContainer: {
        display:'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    selectedFileText: {
        fontWeight: 'bold',
        maxWidth: '40%',
    },
    fileName: {
        fontWeight: 'bold',
        maxWidth: '40%',
    },
    dragFilesText: {
        cursor: 'pointer'
    }
})