# Anotaciones sobre la entrega

- El servicio se encuentra desplegado en
  https://cliente-template-iweb-uma.vercel.app/

---

# Uso

## Ejecución de desarrollo

### Requisitos

- Node 19+
- npm 8+
- Java JDK 1.8+

### Instrucciones

```sh
# 1. Instalar las dependencias
npm i
# 2. Compilar la api. Se debe de ejecutar en cada cambio en la especificación
npm run openapi
# 3. Iniciar el servidor
npm run dev
```

## Ejecución de producción

La aplicación ha sido configurada para ser desplegada en Vercel para producción,
por lo que no puede ser ejecutada en modo producción localmente. El cliente se
encuentra accesible en https://cliente-template-iweb-uma.vercel.app/

# Configuración

La aplicación admite las siguientes opciones de configuración mediante ficheros
`.env` o variables de entorno

| Variable                   | Descripción                 | Valor por defecto |
| -------------------------- | --------------------------- | ----------------- |
| `BACKEND_URL`              | URL del servidor REST       |
| `CLOUDINARY_CLOUD_NAME`    | Cloud name de Cloudinary    |
| `CLOUDINARY_UPLOAD_PRESET` | Upload preset de Cloudinary |
