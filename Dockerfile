# ---- deps stage ----
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Install deps based on lockfile if present
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN   if [ -f package-lock.json ]; then npm ci;   elif [ -f yarn.lock ]; then yarn install --frozen-lockfile;   elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile;   else npm i; fi

# ---- builder stage ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build the Next.js app (make sure next.config has output: 'standalone')
RUN npm run build

# ---- runner (production) ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup -g 1001 nodejs && adduser -D -u 1001 nextjs

# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy the minimal standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# (Optional) If you have a custom server, adjust the start command accordingly.
# Expose the app port
EXPOSE 3001
ENV PORT=3001

# Switch to the non-root user
USER nextjs

# Start the Next.js server
CMD ["node", "server.js"]
