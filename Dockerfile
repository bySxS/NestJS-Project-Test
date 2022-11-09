FROM node:14-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:dev"]