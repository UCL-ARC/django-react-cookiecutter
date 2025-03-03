FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "dev", "--host"]
