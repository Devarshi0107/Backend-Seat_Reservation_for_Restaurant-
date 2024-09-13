# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port your backend uses (default Node.js port is 3000)
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
