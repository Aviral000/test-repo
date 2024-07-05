FROM node:20

ENV PORT_NUMBER=1001
ENV MONGO_URL="mongodb+srv://aviral:aviral@cluster0.ognxkxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

EXPOSE 1001

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm start