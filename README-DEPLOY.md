# Deploying the Next.js app with Docker (Production)

This bundle gives you a clean, production-grade Docker setup using Next.js **standalone** output.

## 1) Update your project files locally

**Replace / add these files in your repo root:**

- `Dockerfile` (from this bundle)
- `.dockerignore` (from this bundle)
- `docker-compose.yml` (from this bundle)
- `next.config.mjs` — ensure it contains `output: 'standalone'` (see below)
- `.env.example` — copy the one here and set real values in `.env` (do **not** commit secrets)

### `next.config.mjs` minimal example
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.e-vaam.com' },
    ],
  },
};
export default nextConfig;
```

## 2) Build & run locally (optional)

```bash
docker compose build
docker compose up -d
docker compose logs -f
# visit http://localhost:3001
```

## 3) Prepare your server

On an Ubuntu/Debian server (as root or with sudo):

```bash
# Install Docker (if you don't have it)
curl -fsSL https://get.docker.com | sh
# Enable the Docker Compose plugin if needed (usually included with recent Docker)
docker compose version
```

## 4) Deploy on the server

Option A — using Git:
```bash
# On your workstation:
git add .
git commit -m "dockerize: production-ready setup"
git push origin <branch>

# On the server (first time):
git clone <your-repo-url> app && cd app
cp .env.example .env   # then edit .env and set real values
docker compose up -d --build
```

Option B — upload a tar/zip:
```bash
# On your workstation
git archive --format=tar.gz -o app.tar.gz <branch>

# On the server
mkdir -p ~/app && cd ~/app
tar -xzf ~/app.tar.gz
cp .env.example .env   # then edit .env
docker compose up -d --build
```

### Common commands
```bash
docker compose ps
docker compose logs -f
docker compose restart
docker compose pull && docker compose up -d   # after pushing new images
```

## 5) Reverse proxy (optional, recommended)

Put the container behind Nginx/Caddy and enable HTTPS (e.g., proxy to `http://127.0.0.1:3001`).

## Notes
- **Do not COPY `.env` into your image.** Supply runtime envs via Compose or your orchestrator.
- The image runs as a **non-root** user with a healthcheck.
- If you change the app port, update `EXPOSE`/`PORT` and the compose `ports` mapping.
