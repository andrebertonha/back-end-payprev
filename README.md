# api backend PayPrev
## Sample da API

 + API backend
  - Cadastro de usuários, login, Consultar desenvolvedores do github, Criar e consultar lista de desenvolvedores, adicionar tags aos respectivos desenvolvedores.

### Instruções

+ Clonar este repositório
+ A partir da pasta raiz do projeto:
  - Execute: yarn

### Requisitos

+ Banco de dados PostGres
  - Criar um banco de dados chamado payprev
  - Execute: yarn sequelize db:migrate
  - Execute: yarn dev

## Rotas da api

  ### Requisitos para consumir API

  <p>baseURL: <b>http://localhost:3333</b></p>
  <p>Heroku baseURL: <b>https://backend-api-payprev.herokuapp.com/</b></p>

  <p> URL de exemplo: <b>http://localhost:3333/users</b> </p>
  <p> URL de exemplo: <b>https://backend-api-payprev.herokuapp.com/users</b> </p>


  ### Cadastro de Usuário [POST /users]

  + Parameters
      - email: (string, required)
      - password: (string, required) min(8)
      - cpf: (string, required) (11)
      - isadmin: (boolean, required)

  + Response 200 (application/json)


  ### Login [POST /sessions]

  + Parameters
      - email: (string, required)
      - password: (string, required) min(8)

  + Response 200 (application/json)
    token

  
  <b>* Nas próximas rotas deve ter o token configurado (Bearer Token) </b>
  ### (admin user) Listar dados usuario github através de seu login [GET /users/:login]

  + URL Parameters
      - login: (string, required)

  + Response 200 (application/json)


  ### (admin user) Criar usuario github [POST /user]

  + Parameters
      - login: (string, required)
      - name: (string, required)
      - bio: (string, required)
      - location: (string, required)
      - html_url: (string, required)

  + Response 200 (application/json)


  ### (common user) Listar usuários github cadastrados [GET /gitusers]

  + Response 200 (application/json)
    + Headers application/json


  ### (common user) Adicionar tags ao usuario github [POST /gitusers/:list]

   + Parameters
      - login: (string, required)
      - tags: (array of string, required)
   + URL Parameters
      - list: (string, required)

  + Response 200 (application/json)
    + Headers application/json



