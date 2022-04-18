FROM node:16-alpine

# Create app working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 3000

# Switch node user to root
USER node

# Running the app
CMD ["npm", "start"]