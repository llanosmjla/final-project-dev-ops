# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración necesarios para la instalación
COPY package.json package-lock.json* ./ 

# Instala las dependencias necesarias para construir la aplicación
RUN npm install --frozen-lockfile

# Copia el resto del código fuente de la aplicación
COPY . .

# Copia el archivo de entorno de producción
COPY .env.production .env.production

# Crea la build de producción de Next.js
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine AS runner

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos estáticos generados en la etapa de build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Copia el archivo de entorno de producción
COPY --from=builder /app/.env.production .env.production

# Instala solo las dependencias necesarias para la ejecución de producción
RUN npm install --production --frozen-lockfile

# Expone el puerto donde correrá la aplicación
EXPOSE 3000

# Establece la variable de entorno para producción
ENV NODE_ENV production

# Comando para iniciar la aplicación
CMD ["npm", "start"]
