from node:alpine as BUILDER

WORKDIR /app

COPY /*.json /app

RUN npm install 

COPY . . 

RUN npm run build 

FROM node:alpine 
WORKDIR /app
COPY --from=BUILDER /app . 
EXPOSE 3000
CMD [ "npm" , "run" , "start:prod" ]
