# Use latest node version (stable)
FROM node:12

# Create app directory
WORKDIR /usr/src/app

ENV NODE_PATH=/usr/src/app/lib

# Install app dependencies - package.json AND package-lock.json
COPY package*.json ./

# Install node-modules (allowing caching)
RUN npm install --no-optional

# Set enviroment variables
ENV MONGODB_HOST=mongo
ENV MONGODB_PORT=27018
ENV VERSION="0.2.0"

# Install code files
COPY . .

# Start server
EXPOSE 3000
CMD [ "npm", "start" ]