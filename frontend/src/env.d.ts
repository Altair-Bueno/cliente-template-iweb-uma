/// <reference types="astro/client" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BACKEND_URL: string;
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_UPLOAD_PRESET: string;
  readonly PUBLIC_PAYPAL_CLIENTID: string;
}
