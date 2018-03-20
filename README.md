# Mock Atlas FrontEnd

Este é um repositório apenas para manter os endpoints da api e retorno de objetos 'mockados', no propósito de facilitar o desenvolvimento frontend.

# Ambiente

  - Acesso ao bitbucket, [link][bitbucket]
  - Node [download][node] versão 8.10.0
  - Gulp [download][gulp] versão 2.0.1
  - Git [download][Git] versão 2.7.4


### Installation

Baixe o node e faça a instalação [Node.js](https://nodejs.org/) v4+.


#### Instalando as dependencias do gulp
```sh
$ sudo npm install -g gulp-cli
```
#### Projeto no bitbucket
```sh
$ git clone https://paulogabrieldesousa@bitbucket.org/cryptodata/frontend-mock.git
$ cd frontend-mock
```
#### Instalando as dependencias do projeto
```sh
~/frontend-mock$ sudo npm install 
```

#### Executando o projeto
```sh
~/frontend-mock$ gulp
```
#### abrindo o projeto no navegador

Abra o navegador e coloque no browser http://localhost:9002/mock-swagger-frontend

#### Criando um novo serviço
Crie um novo diretório com o mesmo nome do serviço:
```sh
~/frontend-mock$ cd docs/apis
~/frontend-mock/docs/apis$ mkdir usuarios
~/frontend-mock/docs/apis$ cd usuarios
~/frontend-mock/docs/apis/usuarios$
```
No arquivo criado, coloque as definições abaixo:
```sh
var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Usuários", // descrição do serviço
        path: "/mock-swagger-frontend/usuario",// endpoint
        method: "GET", //metodo
        summary: "",
        notes: "",
        nickname: "usuarios",
        produces: ["application/json"],
        errorResponses: [{ // tratamento de retorno
                code: "200",
                reason: "Retorno OK"
            },
            {
                code: "400",
                reason: "Parametros invalidos",
                responseModel: "errorResponse"
            }
        ]
    },
    action: function(req, res) {
        // variável que irá receber os dados de retorno da api
        let users = [{
            "id": 1,
            "first_name": "Cordey",
            "last_name": "Jent",
            "email": "cjent0@seesaa.net",
            "gender": "Female",
            "avatar": "https://robohash.org/nihilautblanditiis.png?size=50x50&set=set1"
          }];
          
        // Header do retorno da api
        res.header("X-request-id", "");
        res.header("X-uid", "");
        res.header("X-xss-protection", "1; mode=block");
        res.header("X-access-token", "");
        res.header("X-access-token-expiry", "600");
        res.header("X-access-token-type", "Bearer");
        res.header("X-content-type-options", "nosniff");
        res.header("X-download-options", "noopen");
        res.header("X-frame-options", "DENY");
        res.header("X-powered-by", "Servlet/3.0");
        res.header("access-control-expose-headers", "x-global-request-id,x-uid,x-access-token-type,x-access-token,x-access-token-expiry,x-request-id,x-grant-token,x-grant-token-expiry");

        // tratamento de retorno da api
        // caso necessário retorne com o status 401 para testar os retornos de erros de http
        res.status(200).json(users);
    }
};
```
Caso ainda não tenha iniciado o mock em sua máquina, execute:
```sh
~/frontend-mock$ gulp
```
Ao verificar os dados no navegador, será possível efetuar testes da chamada da api.
No navegador, abra o projeto e verifique o endpoint criado. 
O deverá existir as informações da api e o botão para executar o teste "try it out" e obter o retorno com os dados informados.

#### Observações
Mantenha este repositório atualizado com os endpoints novos.


   [Gulp]: <http://gulpjs.com>
   [Git]: <https://git-scm.com/>
   [bitbucket]: https://bitbucket.org/cryptodata/frontend-mock/src
   [node]: https://nodejs.org/en/
   [gulp]:https://gulpjs.com/