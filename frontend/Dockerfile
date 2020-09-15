# Multi-stage build for containerizing Angular-Nginx app.

# Stage 1: Build/transpile Angular code (prod mode).
FROM node:alpine AS build-stage
WORKDIR /usr/src/app

COPY app/package*.json ./
COPY app/angular.json ./
COPY app/tsconfig*.json ./
RUN npm install

COPY app/src/ ./src/
RUN npm run build -- --prod --output-path=dist/

# Stage 2: Serve the built files via Nginx and copy our own Nginx configs
# into the container.
FROM nginx:alpine
WORKDIR /srv/www
COPY --from=build-stage /usr/src/app/dist/ ./app/
COPY ./nginx.conf /etc/nginx/nginx.conf
