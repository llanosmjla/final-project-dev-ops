# Etapa de dependencias
FROM node:18-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile

# Etapa de build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar los módulos de la etapa de dependencias
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Aceptar las variables de entorno como build arguments
#ARG NEXT_PUBLIC_API_URL
ARG URL_API
ARG VERSION
ARG API_KEY

# Pasar las variables de entorno al entorno de ejecución
#ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV URL_API=${URL_API}
ENV VERSION=${VERSION}
ENV API_KEY=${API_KEY}

# Build de la aplicación, las variables de entorno serán utilizadas por Next.js
RUN npm run build

# Etapa de producción
FROM node:18-alpine AS runner
WORKDIR /app

# Copiar el código necesario
COPY --from=builder /app/.next ./.next
COPY package*.json ./
COPY public ./public
COPY next.config.mjs ./

# Instalar dependencias de producción
RUN npm install --prod

# Exponer el puerto de la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start"]
