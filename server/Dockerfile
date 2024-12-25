# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port for Express
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]
