# Use Node.js to build the frontend
FROM node:20 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Compiles app into build directory
RUN npm run build

# Serve with nginx
FROM nginx:stable
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
