import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import Dropzone, { DropzoneOptions } from 'react-dropzone';
import { useStore } from '../../stores/store';
import { createUseStyles } from 'react-jss';
import FitStackDeleteButton from './FitStackDeleteButton';
import FitStackButton from './FitStackButton';

const FitStackFileDropzone = (props: any) => {
    const {applicationStore} = useStore();
    const styles = useStyles();

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    
    return (
        <div className={styles.container} >
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
                <div {...getRootProps()} className={styles.labelContainer} >
                    <input {...getInputProps()} className={styles.input} />
                    {selectedFiles.length === 0 &&
                        <p className={styles.dragFilesText} >Drop files here or click to select files</p>
                    }
                    {selectedFiles.length > 0 && 
                    <div className={styles.fileListContainer} >
                        {selectedFiles.map((file) => {
                        return(
                            <div key={file.name} className={styles.fileContainer} >
                                <div className={styles.selectedFileText} >Selected File:</div>
                                <div className={styles.fileName} >{file.name}</div>
                                <div className={styles.deleteButtonConatiner} >
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


const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        maxWidth: '80%',
    },
    fileContainer: {
        display:'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    selectedFileText: {
        fontWeight: 'bold',
        maxWidth: '40%',
    },
    fileName: {
        fontWeight: 'bold',
        maxWidth: '40%',
        maxHeight: '30%'
    },
    dragFilesText: {
        cursor: 'pointer'
    },
    labelContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    input: {
        maxWidth: '80%',
    },
    deleteButtonConatiner: {
        zIndex: 15,
    },
    fileListContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    }
})