# Docker Configuration

This folder contains Docker configuration files for **production deployment** of the React Vite application.

## Files

- `Dockerfile` - Production multi-stage build
- `docker-compose.yml` - Docker Compose configuration for production
- `nginx.conf` - Nginx configuration for production serving
- `README.md` - This documentation

## Production Deployment

### Environment configuration

The Docker build expects a `.env` file at the project root. If you don’t have one yet, create it from the example:

```bash
cp .env.example .env
```

Update any Vite variables (prefixed with `VITE_`) before building so they are baked into the production bundle.

### Using Docker Compose

```bash
# Build docker from project root
docker-compose -f docker/docker-compose.yml up -d --build

# View logs
docker-compose -f docker/docker-compose.yml logs -f
```

## Deployment Features

- **Multi-stage build** for optimized image size
- **Nginx** for efficient static file serving
- **Security headers** and optimizations
- **Gzip compression** for better performance
- **SPA routing support** for React Router
