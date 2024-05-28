FROM node:15

# Instalação do Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app

COPY . .

# Instalação das dependências e espera pelo serviço db
RUN npm install

EXPOSE 3000

# Comando para iniciar a aplicação após esperar pelo serviço db
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "30s", "node", "index.js"]
