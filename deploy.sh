#!/usr/bin/bash

# Cargar las variables de entorno desde el archivo .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo "El archivo .env no existe."
    exit 1
fi

# Mostrar las variables de entorno
echo "Mostrando las variables de entorno..."
echo "DOCKER_USERNAME: $DOCKER_USERNAME"
echo "DOCKER_PASSWORD: $DOCKER_PASSWORD"
echo "URL_API: $URL_API"
echo "VERSION: $VERSION"
echo "API_KEY: $API_KEY"

# Verificar que las credenciales de Docker Hub estén configuradas
if [ -z "$DOCKER_USERNAME" ] || [ -z "$DOCKER_PASSWORD" ]; then
    echo "Las credenciales de Docker Hub no están configuradas."
    exit 1
fi

# Verificar si Docker Compose está instalado
if ! [ -x "$(command -v docker-compose)" ]; then
    echo "Docker Compose no está instalado."
    exit 1
fi

# Iniciar sesión en Docker Hub
echo "Iniciando sesión en Docker Hub..."
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Verificar si el login fue exitoso
if [ $? -ne 0 ]; then
    echo "El inicio de sesión en Docker Hub falló."
    exit 1
fi

# Construir y ejecutar la aplicación usando Docker Compose
echo "Construyendo y desplegando la aplicación con Docker Compose..."
docker-compose up --build -d

# Verificar si el despliegue fue exitoso
if [ $? -ne 0 ]; then
    echo "El despliegue con Docker Compose falló."
    exit 1
fi

echo "El despliegue ha sido completado exitosamente."

# Subir la imagen a Docker Hub
echo "Subiendo la imagen a Docker Hub..."
docker push $DOCKER_USERNAME/nextjs-app-world-football

# Verificar si el push fue exitoso
if [ $? -ne 0 ]; then
    echo "La subida de la imagen a Docker Hub falló."
    exit 1
fi

echo "La imagen ha sido subida a Docker Hub exitosamente."
