## Development Environment

This project uses monogo db backend, and node on the frontend.

### Tooling Requirements

- Node
- Yarn
- Docker
- MongoDB Compass or MongoDB CLI

### Install Node Dependencies

From the `app/` directory...
`yarn install`

### Start Mongo DB
`docker run --name mongodb -p 27017:27017 -d mongo:latest`

## Start the App

From the `app/` directory...
`yarn dev`