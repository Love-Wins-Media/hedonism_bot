import React, { Component } from 'react';
import Dropzone, { DropzoneState, FileRejection } from 'react-dropzone'

interface UploadState {
    acceptedFiles: File[];
    rejectedFiles: FileRejection[];
}

interface MultiUploaderProps {
    uploadPath?: string
}

export class MultiUploader extends Component<MultiUploaderProps, UploadState> {
    constructor(props: MultiUploaderProps) {
        super(props);
        this.state = {
            acceptedFiles: [],
            rejectedFiles: [],
        };
    }

    static defaultProps = {
        uploadPath: '/upload'
    };

    // 3. Define the type-safe handleDrop callback
    handleDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        this.setState({
            acceptedFiles: [...this.state.acceptedFiles, ...acceptedFiles],
            rejectedFiles: [...this.state.rejectedFiles, ...fileRejections],
        });
    };

    upload = async() => {
        const uploadPath = this.props.uploadPath ?? MultiUploader.defaultProps.uploadPath;
        await Promise.all(this.state.acceptedFiles.map(async (file ) => {
            const formData = new FormData();
            formData.append('file', file);

            await fetch(uploadPath, {
                method: 'POST',
                body: formData,
            });
        }));
    }

    render() {
        return (
            <div className="container">
                {/* 4. Use the Dropzone Render Prop Component */}
                <Dropzone onDrop={this.handleDrop} accept={{ 'image/*': ['.png', '.jpg', '.jpeg', '.arw', '.hif'] }}>
                    {({ getRootProps, getInputProps, isDragActive }: DropzoneState) => (
                        <div
                            {...getRootProps()}
                            style={{
                                border: '2px dashed #0087F7',
                                borderRadius: '5px',
                                padding: '40px',
                                textAlign: 'center',
                                backgroundColor: isDragActive ? '#ecf0f1' : '#f9f9f9',
                                cursor: 'pointer',
                            }}
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop the files here ...</p>
                            ) : (
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            )}
                        </div>
                    )}
                </Dropzone>

                {/* 5. Display List of Successfully Uploaded Files */}
                {this.state.acceptedFiles.length > 0 && (
                    <div>
                        <h4>Accepted Files:</h4>
                        <ul>
                            {this.state.acceptedFiles.map((file) => (
                                <li key={file.name}>
                                    {file.name} - {file.size} bytes
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* 6. Display List of Rejected Files */}
                {this.state.rejectedFiles.length > 0 && (
                    <div style={{ color: 'red' }}>
                        <h4>Rejected Files:</h4>
                        <ul>
                            {this.state.rejectedFiles.map(({ file, errors }) => (
                                <li key={file.name}>
                                    {file.name} - {errors[0].message}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button onClick={this.upload}>Upload</button>
            </div>
        );
    }
}