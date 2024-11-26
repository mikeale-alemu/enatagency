# Step 1: Build Stage
ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./ 
RUN npm ci --only=production

# Copy the remaining application files
COPY . .

# Build the application
RUN npm run build

# Remove development dependencies to reduce image size
RUN npm prune --production

# Step 2: Production Stage
FROM node:${NODE_VERSION}-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port that the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
