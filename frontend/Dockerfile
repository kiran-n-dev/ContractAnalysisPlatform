# Stage 1: Builder
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run npm build using npx to ensure react-scripts is found
RUN npx react-scripts build --verbose && ls -l /app

# Stage 2: Runner
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/build /app/build

# Verify build directory in runner stage
RUN ls -l /app

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]