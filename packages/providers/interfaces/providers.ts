export interface UploadToCloudConfig {
    uploadFile: (file: File) => Promise<string>;
}
