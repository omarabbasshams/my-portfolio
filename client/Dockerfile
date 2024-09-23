# Frontend Dockerfile

# Use an official Node.js image to build the frontend
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx image to serve the frontend
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will serve on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
