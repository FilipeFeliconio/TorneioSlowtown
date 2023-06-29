# Base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run database migrations
RUN npx sequelize-cli db:migrate --env development

# Expose the server port
EXPOSE 8080

# Start the local server
CMD ["npm", "run", "dev"]
