# Next.js Project - World Project - Dev Ops - 2024 -JL70
## Installation
If you want to create a project with Next.js, check the following link: [`Installation`](https://nextjs.org/docs/getting-started/installation).
## -----------------------------------------------------------------------------------------
## Description

This project is developed with **Next.js**, a React framework that allows for easy and rapid creation of web applications and static sites.

### API Integration

The application consumes an API that provides:

- **Results and Statistics**: Access to the latest football match results and statistical data.
- **Team Information**: Details about various football teams.
- **Championships and Tournaments**: Information regarding ongoing and past championships and tournaments.

You can access the API at [football-data.org](https://api.football-data.org/v4/). For more details about the API and its functionalities, visit their official website at [football-data.org](https://www.football-data.org/).

### Docker and Deployment

This project includes a Dockerfile for creating a Docker image and an automated workflow with GitHub Actions to facilitate deployment to Docker Hub.


## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Docker](#docker)
  - [Dockerfile](#dockerfile)
  - [Deployment Script](#deployment-script)

## Features
- **SSR (Server-Side Rendering)**: Leverage Next.js capabilities for improved SEO and performance.
- **Responsive UI**: Built to provide a seamless experience across devices.
- **Docker Integration**: Simplified development and production workflows using Docker.
- **Automated Deployment**: Continuous deployment setup using GitHub Actions.
- **Automated Docker Image Management**: Includes a script for automated pulling and running of the Docker image, streamlining the deployment process.

## Technologies
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Node.js](https://nodejs.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
## Installation
### Installation and use
1. Clone the repository:
   ```bash
   git clone https://https://github.com/llanosmjla/final-project-dev-ops.
2. Clone the repository:
   ```bash
   cd final-project-dev-ops
3. Install dependencies
   ```bash
   npm install
5. Run the project
   ```bash
   npm run dev
7. For production - build
   ```bash
   npm run build
8. For production - start
   ```bash
   npm run start
## Docker

### Dockerfile
The Dockerfile included in this project sets up the environment needed to run the Next.js application. It specifies the base image, installs dependencies, and configures the application to run within a Docker container. Below is a brief overview of the key instructions used in the Dockerfile:

- **FROM**: Defines the base image, which is a Node.js environment.
- **WORKDIR**: Sets the working directory inside the container.
- **COPY**: Copies the project files into the container.
- **RUN**: Installs project dependencies using npm.
- **EXPOSE**: Exposes the necessary port for the application.
- **CMD**: Specifies the command to run the application when the container starts.
### Deployment Script
The deployment script (`deploy.sh`) automates the process of pulling the latest Docker image and running the container. This script handles authentication with Docker Hub, checks for existing containers, and ensures that the application runs on an available port.
#### Access and download script: [`deploy.sh`](https://drive.google.com/drive/folders/1_qETruWq3HZIoOOHwsZOvQ9W2kO2mCWC?usp=sharing)

#### Key functionalities of the script include:

- **Login Verification**:
  - Checks if the user is logged into Docker.
  - Prompts the user to log in if they are not authenticated.
  - You can create a `.env` file to store your Docker Hub credentials for easier management.

- **Image Pulling**:
  - Pulls the latest version of the Docker image from Docker Hub.

- **Container Management**:
  - Stops and removes any existing containers using the same image to avoid conflicts.

- **Container Execution**:
  - Runs a new container instance with the necessary configurations.

To execute the deployment script, simply run:

```bash
./deploy.sh


