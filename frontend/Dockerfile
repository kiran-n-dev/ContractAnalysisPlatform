# Stage 1: Builder
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run npm build with increased verbosity and check for build directory
RUN npm run build --verbose && ls -l /app

# Stage 2: Runner
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]