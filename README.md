# Desafio Nginx Node

Este repositório é uma aplicação simples que demonstra o uso do NGINX como proxy reverso para uma aplicação Node.js, utilizando Docker Compose para gerenciar os contêineres.

## Créditos

Este projeto foi baseado no repositório de [TiagoC-Aguiar](https://github.com/TiagoC-Aguiar/desafio-nginx-node), a quem agradeço pela inspiração e pela base do código, possibilitando aprofundar no conhecimento de gestão de Dependência entre Containers e a parte de Networking. Aprofundando nesses seguintes aspectos:

1. **Network Bridge**
O Docker Compose está configurado para criar uma rede bridge isolada para os serviços listados no arquivo docker-compose.yml. Esta rede permite que os serviços se comuniquem entre si usando os nomes dos serviços como hosts. Isso é útil para isolar os serviços e simplificar a comunicação entre eles.

2. **Dockerize**
O Dockerize é uma ferramenta usada para aguardar a disponibilidade de outros serviços antes de iniciar um contêiner. Neste projeto, o Dockerize é usado para esperar até que o serviço de banco de dados MySQL esteja pronto antes de iniciar o serviço da aplicação Node.js. Isso garante que a aplicação só seja iniciada quando o banco de dados estiver disponível, evitando erros de conexão durante o processo de inicialização.

## Como usar

Certifique-se de ter o Docker instalado em seu ambiente.

1. Clone este repositório:

```bash
git clone https://github.com/pedrovmjm/desafio-fullcycle-nginx-node.js.git
```

2. Faça o build com Docker Compose para verificar se há algum erro, dentro da pasta que contém o docker-compose.yml:

```bash
docker-compose build
```

3. Inicie os contêineres usando o Docker Compose:

```bash
docker-compose up -d
```

Isso iniciará os contêineres para a aplicação Node.js, o banco de dados MySQL e o servidor Nginx.

## Acesso à aplicação

Após iniciar os contêineres, aguarde alguns segundos para garantir que todos os serviços estejam prontos para uso. Em seguida, você pode acessar a aplicação no navegador em http://localhost:8080.

## Aviso

Por favor, note que pode haver um pequeno tempo de espera após iniciar os contêineres antes que a aplicação esteja completamente pronta para uso. Isso é normal, pois os serviços estão sendo inicializados e configurados.