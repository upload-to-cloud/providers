import { UploadToCloudConfig } from "./interfaces/providers";

export class UploadToCloudCore {
    config: UploadToCloudConfig;

    constructor(config: UploadToCloudConfig) {
        this.config = config;    
    }
}