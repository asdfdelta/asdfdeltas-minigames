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

### Start MongoDB

`docker run --name mongodb -p 27017:27017 -d mongo:latest`

### Connect to MongoDB

`mongodb://localhost:27017/`

### Start the App

From the `app/` directory...
`yarn dev`