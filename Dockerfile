FROM node:12
WORKDIR ./usr/src/react-app-igti
COPY package.json .
COPY ./src ./src
COPY ./public ./public
RUN npm install 
RUN npm run build
EXPOSE 3000
CMD npm start