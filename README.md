# Express.js Project

A minimal Express.js REST API project with health check endpoint.

## Project Structure

```
.
├── src/
│   └── app.js              # Express app configuration
├── server.js              # Entry point
├── postman_collection.json # API testing collection
├── package.json
└── .env.example
```

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

### Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message with API information
- `GET /api/health` - Health check endpoint (returns status, timestamp, uptime, environment)

## Testing with Postman

Import the `postman_collection.json` file into Postman to test the API endpoints.

## License

MIT
