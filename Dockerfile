#use a image base to create a new image
FROM node:18-alpine AS base

FROM base AS builder

# Update package index and install libc6-compat for glibc compatibility on Alpine Linux
RUN apk update
RUN apk add --no-cache libc6-compat

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the source code
COPY . .

#build the application
RUN npm run build

# Stage of execution
FROM base AS runner

#set the working directory
WORKDIR /app

# add a user no-root to run the application
RUN addgroup -sytem --gid 1001 appgroup && adduser -system --uid 1001 --ingroup appgroup appuser
USER appuser

#copy the build files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

#expose the port
EXPOSE 3000

#run the application
CMD ["npm", "start"]






