import { observer } from 'mobx-react-lite';
import React from 'react';
import Dropzone from 'react-dropzone';
import { useStore } from '../../stores/store';
import { createUseStyles } from 'react-jss';
import FitStackDeleteButton from './FitStackDeleteButton';

const FitStackSingleFileDropzone = (props: any) => {
    const {applicationStore} = useStore();
    const styles = useStyles();
    
    return (
        <div className={styles.container} >
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
                <div {...getRootProps()} className={styles.labelContainer} >
                    <input {...getInputProps()} className={styles.input} />
                    {applicationStore.selectedResumeFile === undefined &&
                        <p className={styles.dragFilesText} >Drop files here or click to select files</p>
                    }
                    {applicationStore.selectedResumeFile !== undefined && 
                    <div className={styles.fileListContainer} >
                            <div className={styles.fileContainer} >
                                <div className={styles.selectedFileText} >Selected File:</div>
                                <div className={styles.fileName} >{applicationStore.selectedResumeFile.name}</div>
                                <div className={styles.deleteButtonConatiner} >
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