import { UploadToCloudConfig } from "@upload-to-cloud/providers";

export const gdriveConfig: UploadToCloudConfig = {
    uploadFile: (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve("gdrive")
        });
    }
}
