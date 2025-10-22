declare namespace AppWorker {
  interface MagickWorkerRequestMap {
    compress: Array<{ file: File; quality?: number }>;
    resize: Array<{ file: File; width: number; height: number }>;
    crop: Array<{ file: File; width: number; height: number; x: number; y: number }>;
    convert: Array<{ file: File; format: string }>;
  }

  type MagickWorkerResponse =
    | {
        status: 'ok';
        files: Array<File>;
      }
    | {
        status: 'error';
        error: string;
      }
    | {
        status: 'processing';
        progress: number;
      };

  type MagickWorkerResponseStatus = MagickWorkerResponse['status'];
}
