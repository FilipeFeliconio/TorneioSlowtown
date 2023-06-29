# Dockerfile
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for backend
COPY ./backend/package*.json ./backend/

# Install backend dependencies
RUN cd backend && npm install

# Copy the rest of the backend code
COPY ./backend ./backend

# Copy package.json and package-lock.json for frontend
COPY ./torneio-slowtown/package*.json ./torneio-slowtown/

# Install frontend dependencies
RUN cd torneio-slowtown && npm install

# Copy the rest of the frontend code
COPY ./torneio-slowtown ./torneio-slowtown

# Create a .env file based on .env.example for backend
RUN cp ./backend/.env.example ./backend/.env

# Run database migration for backend
RUN cd backend && npx sequelize-cli db:migrate --env development

# Expose ports for frontend and backend
EXPOSE 3000
EXPOSE 8080

# Start the backend and frontend in parallel
CMD ["sh", "-c", "cd backend && npm run dev & cd ../torneio-slowtown && npm start"]
