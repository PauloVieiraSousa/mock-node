var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Usuários",
        path: "/mock-swagger-frontend/usuarios",
        method: "GET",
        summary: "",
        notes: "",
        nickname: "usuarios",
        produces: ["application/json"],
        errorResponses: [{
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

        let users = [{
            "id": 1,
            "first_name": "Cordey",
            "last_name": "Jent",
            "email": "cjent0@seesaa.net",
            "gender": "Female",
            "avatar": "https://robohash.org/nihilautblanditiis.png?size=50x50&set=set1"
          }, {
            "id": 2,
            "first_name": "Luca",
            "last_name": "Dadson",
            "email": "ldadson1@dmoz.org",
            "gender": "Male",
            "avatar": "https://robohash.org/reprehenderitdictaconsequatur.jpg?size=50x50&set=set1"
          }, {
            "id": 3,
            "first_name": "Alleyn",
            "last_name": "Gwilt",
            "email": "agwilt2@phpbb.com",
            "gender": "Male",
            "avatar": "https://robohash.org/nequeinrepellat.png?size=50x50&set=set1"
          }, {
            "id": 4,
            "first_name": "Mariejeanne",
            "last_name": "Stinton",
            "email": "mstinton3@irs.gov",
            "gender": "Female",
            "avatar": "https://robohash.org/saepequoculpa.png?size=50x50&set=set1"
          }, {
            "id": 5,
            "first_name": "Isidore",
            "last_name": "Rothschild",
            "email": "irothschild4@chronoengine.com",
            "gender": "Male",
            "avatar": "https://robohash.org/temporibusaliasut.jpg?size=50x50&set=set1"
          }, {
            "id": 6,
            "first_name": "Alys",
            "last_name": "Holywell",
            "email": "aholywell5@studiopress.com",
            "gender": "Female",
            "avatar": "https://robohash.org/autanimireiciendis.bmp?size=50x50&set=set1"
          }, {
            "id": 7,
            "first_name": "Greer",
            "last_name": "McLanaghan",
            "email": "gmclanaghan6@themeforest.net",
            "gender": "Female",
            "avatar": "https://robohash.org/minusiustomaiores.jpg?size=50x50&set=set1"
          }, {
            "id": 8,
            "first_name": "Aloysius",
            "last_name": "Borghese",
            "email": "aborghese7@opera.com",
            "gender": "Male",
            "avatar": "https://robohash.org/consequaturaliquidlaboriosam.bmp?size=50x50&set=set1"
          }, {
            "id": 9,
            "first_name": "Anatola",
            "last_name": "Wandrach",
            "email": "awandrach8@bbc.co.uk",
            "gender": "Female",
            "avatar": "https://robohash.org/iurepraesentiumquae.bmp?size=50x50&set=set1"
          }, {
            "id": 10,
            "first_name": "Tim",
            "last_name": "D'Orsay",
            "email": "tdorsay9@usatoday.com",
            "gender": "Male",
            "avatar": "https://robohash.org/voluptatemfacilisquidem.bmp?size=50x50&set=set1"
          }, {
            "id": 11,
            "first_name": "Haley",
            "last_name": "Bourgour",
            "email": "hbourgoura@weibo.com",
            "gender": "Male",
            "avatar": "https://robohash.org/corporisquiincidunt.png?size=50x50&set=set1"
          }, {
            "id": 12,
            "first_name": "Lorettalorna",
            "last_name": "Thirwell",
            "email": "lthirwellb@plala.or.jp",
            "gender": "Female",
            "avatar": "https://robohash.org/eumundevoluptatem.jpg?size=50x50&set=set1"
          }, {
            "id": 13,
            "first_name": "Brittaney",
            "last_name": "Baldrick",
            "email": "bbaldrickc@sciencedirect.com",
            "gender": "Female",
            "avatar": "https://robohash.org/cupiditateveniamcumque.jpg?size=50x50&set=set1"
          }, {
            "id": 14,
            "first_name": "Allianora",
            "last_name": "Giroldo",
            "email": "agiroldod@networksolutions.com",
            "gender": "Female",
            "avatar": "https://robohash.org/quiabeataesuscipit.png?size=50x50&set=set1"
          }, {
            "id": 15,
            "first_name": "Josephine",
            "last_name": "Antoniou",
            "email": "jantonioue@hao123.com",
            "gender": "Female",
            "avatar": "https://robohash.org/earumexpeditaab.bmp?size=50x50&set=set1"
          }, {
            "id": 16,
            "first_name": "Adelice",
            "last_name": "Senchenko",
            "email": "asenchenkof@businesswire.com",
            "gender": "Female",
            "avatar": "https://robohash.org/fugiatdolorvoluptas.png?size=50x50&set=set1"
          }, {
            "id": 17,
            "first_name": "Beryl",
            "last_name": "Gallegos",
            "email": "bgallegosg@marriott.com",
            "gender": "Female",
            "avatar": "https://robohash.org/doloressuntreiciendis.jpg?size=50x50&set=set1"
          }, {
            "id": 18,
            "first_name": "Rafaello",
            "last_name": "Treece",
            "email": "rtreeceh@ning.com",
            "gender": "Male",
            "avatar": "https://robohash.org/sedevenietlaboriosam.png?size=50x50&set=set1"
          }, {
            "id": 19,
            "first_name": "Clyde",
            "last_name": "Tombleson",
            "email": "ctomblesoni@yolasite.com",
            "gender": "Male",
            "avatar": "https://robohash.org/autemsuntest.png?size=50x50&set=set1"
          }, {
            "id": 20,
            "first_name": "Maryanne",
            "last_name": "MacRonald",
            "email": "mmacronaldj@netvibes.com",
            "gender": "Female",
            "avatar": "https://robohash.org/eveniettemporibusdoloremque.jpg?size=50x50&set=set1"
          }];
        
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

        res.status(200).json(users);
    }
};