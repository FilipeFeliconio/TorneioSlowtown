# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
-  Create a .env file in the root of your project backend based in .env.example
- `npx sequelize-cli db:migrate --env development` to run migrations
- `npm run dev` to start the local server

Deploy
- [How to deploy Node Express API to an AWS EC2 Ubuntu instance] (https://jonathans199.medium.com/how-to-deploy-node-express-api-to-ec2-instance-in-aws-bc038a401156)
-  Create a .env file in the root of your project backend based in .env.example, define NODE_ENV=production
- `sequelize db:migrate --env production` to run migrations

## Testes no Jest
To run the tests, use the commands below. Make sure you provide a jwt token for the tests in the .env file and set the environment to test

```bash
  npx sequelize-cli db:migrate --env=test
  npm run test

# Estrutura de diretórios
```
│   app.js           # Configurações Servidor, definições do Express
│   index.js         # Inicia o servidor
|   .env             # Configuração das variáveis de ambiente
|   database.sqlite  # Arquivo do banco de dados SQLite compartilhado pelos módulos de autenticação e app
|   .sequelizerc     # Definição de diretórios para o sequelize
└───docs             # Arquivos de documentação, diagrama banco de dados e collection de testes da api              
└───src                 
   └───controllers   # Este diretório contém os controladores para lidar com as ações das rotas da api
   └───database      # Definição de configs de banco de dados e migrations
       └───config    
       └───migrations
   └───models        # Este diretório contém os modelos para as entidades da aplicação
       └───app       # Contém os modelos relacionados às entidades da aplicação
   └───middleware    # Componentes de autenticação
```


## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [sequelize](https://github.com/sequelize/sequelize) - ORM tool for modeling and mapping data to Node.js 
- [sqlite3](https://github.com/TryGhost/node-sqlite3) -  SQLite3 bindings for Node.js
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) -  Library to help generate hash passwords
- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
- [dotenv](https://github.com/motdotla/dotenv) - Module for load environment variables from a .env file into process.env
