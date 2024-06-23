# Stage 1: Compile and Build angular codebase
# Use the Node image as a base image
FROM node:latest AS build

ARG configuration=production
ENV configuration $configuration

WORKDIR /app

RUN echo build environment: $configuration
COPY . .
RUN npm install
RUN npm run build-${configuration}

# Stage 2: Serve app with nginx server

# Use nginx for serving the built app
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist/chatbot_app /usr/share/nginx/html

# Copy the nginx configuration file
COPY /config/nginx.conf /etc/nginx/nginx.conf

# Copy local snippets to the snippets directory
COPY /config/snippets /etc/nginx/snippets

EXPOSE 8080

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/settings.template.json > /usr/share/nginx/html/assets/settings.json && exec nginx -g 'daemon off;'"]
