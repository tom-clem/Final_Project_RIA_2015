var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope){

  $scope.contacts = [
    {
      "_id": 0,
      "picture": "https://randomuser.me/api/portraits/thumb/women/12.jpg",
      "age": 25,
      "name": "Lila Clay",
      "gender": "female",
      "company": "Incubus",
      "email": "lilaclay@incubus.com",
      "phone": "+1 (854) 542-2518",
      "address": "439 Overbaugh Place, Orin, Vermont, 5904"
    },
    {
      "_id": 1,
      "picture": "https://randomuser.me/api/portraits/thumb/women/21.jpg",
      "age": 27,
      "name": "Trudy Gutierrez",
      "gender": "female",
      "company": "Magnemo",
      "email": "trudygutierrez@magnemo.com",
      "phone": "+1 (901) 464-2442",
      "address": "425 Boerum Place, Saranap, Arizona, 6473"
    },
    {
      "_id": 2,
      "picture": "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      "age": 21,
      "name": "Ana Santos",
      "gender": "female",
      "company": "Confrenzy",
      "email": "anasantos@confrenzy.com",
      "phone": "+1 (879) 477-2132",
      "address": "524 Bancroft Place, Clara, Northern Mariana Islands, 3259"
    },
    {
      "_id": 3,
      "picture": "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      "age": 32,
      "name": "Macias Rand",
      "gender": "male",
      "company": "Geeky",
      "email": "maciasrandolph@geeky.com",
      "phone": "+1 (821) 480-3945",
      "address": "489 Brightwater Court, Bethany, Kentucky, 1264"
    },
    {
      "_id": 4,
      "picture": "https://randomuser.me/api/portraits/thumb/women/32.jpg",
      "age": 25,
      "name": "Greta Medina",
      "gender": "female",
      "company": "Barkarama",
      "email": "gretamedina@barkarama.com",
      "phone": "+1 (924) 478-2361",
      "address": "731 Alice Court, Manitou, West Virginia, 1141"
    },
    {
      "_id": 5,
      "picture": "https://randomuser.me/api/portraits/thumb/men/18.jpg",
      "age": 37,
      "name": "Sweet Sears",
      "gender": "male",
      "company": "Insuron",
      "email": "sweetsears@insuron.com",
      "phone": "+1 (837) 589-2784",
      "address": "268 Times Placez, Alderpoint, Indiana, 8799"
    },
    {
      "_id": 6,
      "picture": "https://randomuser.me/api/portraits/thumb/women/6.jpg",
      "age": 37,
      "name": "Haley Goodman",
      "gender": "female",
      "company": "Biolive",
      "email": "haleygoodman@biolive.com",
      "phone": "+1 (948) 454-3823",
      "address": "756 Lamont Court, Oberlin, Wyoming, 3859"
    },
    {
      "_id": 7,
      "picture": "https://randomuser.me/api/portraits/thumb/women/40.jpg",
      "age": 29,
      "name": "Lacy Sharpe",
      "gender": "female",
      "company": "Zillatide",
      "email": "lacysharpe@zillatide.com",
      "phone": "+1 (803) 569-2006",
      "address": "833 Melrose Street, Crisman, Virgin Islands, 5850"
    },
    {
      "_id": 8,
      "picture": "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      "age": 30,
      "name": "Aileen Rowe",
      "gender": "female",
      "company": "Blurrybus",
      "email": "aileenrowe@blurrybus.com",
      "phone": "+1 (919) 535-2847",
      "address": "961 Cooke Court, Garfield, Florida, 8121"
    },
    {
      "_id": 9,
      "picture": "https://randomuser.me/api/portraits/thumb/women/10.jpg",
      "age": 38,
      "name": "Nadia Hudson",
      "gender": "female",
      "company": "Neurocell",
      "email": "nadiahudson@neurocell.com",
      "phone": "+1 (931) 493-2678",
      "address": "867 Riverdale Avenue, Frierson, Nebraska, 1292"
    },
    {
      "_id": 10,
      "picture": "https://randomuser.me/api/portraits/thumb/men/36.jpg",
      "age": 22,
      "name": "Henry Navarro",
      "gender": "male",
      "company": "Skyplex",
      "email": "henrynavarro@skyplex.com",
      "phone": "+1 (822) 421-2667",
      "address": "755 Caton Avenue, Lithium, Maine, 8105"
    },
    {
      "_id": 11,
      "picture": "https://randomuser.me/api/portraits/thumb/women/44.jpg",
      "age": 28,
      "name": "Irma Sweeney",
      "gender": "female",
      "company": "Musix",
      "email": "irmasweeney@musix.com",
      "phone": "+1 (941) 535-2860",
      "address": "612 Linden Street, Clay, Michigan, 3557"
    },
    {
      "_id": 12,
      "picture": "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      "age": 25,
      "name": "Carly Alford",
      "gender": "female",
      "company": "Bedlam",
      "email": "carlyalford@bedlam.com",
      "phone": "+1 (996) 586-2653",
      "address": "907 Stone Avenue, Loveland, North Carolina, 7367"
    },
    {
      "_id": 13,
      "picture": "https://randomuser.me/api/portraits/thumb/men/27.jpg",
      "age": 28,
      "name": "Hinton Ware",
      "gender": "male",
      "company": "Poochies",
      "email": "hintonware@poochies.com",
      "phone": "+1 (908) 458-3808",
      "address": "266 Hopkins Street, Canterwood, Nevada, 9890"
    },
    {
      "_id": 14,
      "picture": "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      "age": 22,
      "name": "Dejesus Hicks",
      "gender": "male",
      "company": "Gorganic",
      "email": "dejesushicks@gorganic.com",
      "phone": "+1 (952) 570-2579",
      "address": "142 Forest Place, Alafaya, Alabama, 3898"
    },
    {
      "_id": 15,
      "picture": "https://randomuser.me/api/portraits/thumb/women/34.jpg",
      "age": 34,
      "name": "Lillian Jennings",
      "gender": "female",
      "company": "Printspan",
      "email": "lillianjennings@printspan.com",
      "phone": "+1 (849) 412-2125",
      "address": "678 Elm Avenue, Abiquiu, North Dakota, 5122"
    },
    {
      "_id": 16,
      "picture": "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      "age": 28,
      "name": "Louella Boyd",
      "gender": "female",
      "company": "Softmicro",
      "email": "louellaboyd@softmicro.com",
      "phone": "+1 (949) 566-2415",
      "address": "985 Cadman Plaza, Navarre, District Of Columbia, 4111"
    },
    {
      "_id": 17,
      "picture": "https://randomuser.me/api/portraits/thumb/women/5.jpg",
      "age": 27,
      "name": "May Davenport",
      "gender": "female",
      "company": "Minga",
      "email": "maydavenport@minga.com",
      "phone": "+1 (904) 495-2016",
      "address": "902 Troutman Street, Roulette, Washington, 1253"
    },
    {
      "_id": 18,
      "picture": "https://randomuser.me/api/portraits/thumb/women/13.jpg",
      "age": 38,
      "name": "Lena Farrell",
      "gender": "female",
      "company": "Eventage",
      "email": "lenafarrell@eventage.com",
      "phone": "+1 (931) 575-3095",
      "address": "708 Bartlett Street, Salunga, Massachusetts, 9794"
    },
    {
      "_id": 19,
      "picture": "https://randomuser.me/api/portraits/thumb/women/34.jpg",
      "age": 39,
      "name": "Angelique Wall",
      "gender": "female",
      "company": "Flumbo",
      "email": "angeliquewall@flumbo.com",
      "phone": "+1 (881) 470-2703",
      "address": "923 Middagh Street, Enetai, Federated States Of Micronesia, 3196"
    },
    {
      "_id": 20,
      "picture": "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      "age": 23,
      "name": "Olson King",
      "gender": "male",
      "company": "Apexia",
      "email": "olsonking@apexia.com",
      "phone": "+1 (961) 445-2984",
      "address": "341 Bleecker Street, Kenmar, Ohio, 9518"
    },
    {
      "_id": 21,
      "picture": "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      "age": 21,
      "name": "Reese Doyle",
      "gender": "male",
      "company": "Collaire",
      "email": "reesedoyle@collaire.com",
      "phone": "+1 (980) 600-3066",
      "address": "309 Tech Place, Brady, Pennsylvania, 2440"
    },
    {
      "_id": 22,
      "picture": "https://randomuser.me/api/portraits/thumb/men/10.jpg",
      "age": 21,
      "name": "Higgins Lopez",
      "gender": "male",
      "company": "Zyple",
      "email": "higginslopez@zyple.com",
      "phone": "+1 (963) 529-2220",
      "address": "475 Gunnison Court, Cliff, South Dakota, 8705"
    },
    {
      "_id": 23,
      "picture": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
      "age": 25,
      "name": "Strong Mueller",
      "gender": "male",
      "company": "Dadabase",
      "email": "strongmueller@dadabase.com",
      "phone": "+1 (976) 470-2923",
      "address": "821 Micieli Place, Steinhatchee, Arkansas, 143"
    },
    {
      "_id": 24,
      "picture": "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      "age": 20,
      "name": "Pitts Spence",
      "gender": "male",
      "company": "Grok",
      "email": "pittsspence@grok.com",
      "phone": "+1 (941) 551-2974",
      "address": "981 Schenck Avenue, Eastmont, Guam, 6636"
    },
    {
      "_id": 25,
      "picture": "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      "age": 29,
      "name": "Linette Leblanc",
      "gender": "female",
      "company": "Xsports",
      "email": "antoinetteleblanc@xsports.com",
      "phone": "+1 (941) 408-2620",
      "address": "821 Fiske Place, Bentley, Virginia, 8991"
    },
    {
      "_id": 26,
      "picture": "https://randomuser.me/api/portraits/thumb/men/31.jpg",
      "age": 29,
      "name": "Casey Morrow",
      "gender": "male",
      "company": "Geekol",
      "email": "caseymorrow@geekol.com",
      "phone": "+1 (845) 540-3249",
      "address": "921 Crown Street, Albrightsville, Texas, 6055"
    },
    {
      "_id": 27,
      "picture": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
      "age": 29,
      "name": "Isabel Jenkins",
      "gender": "female",
      "company": "Lingoage",
      "email": "isabeljenkins@lingoage.com",
      "phone": "+1 (987) 433-3671",
      "address": "289 Ryerson Street, Chesapeake, Tennessee, 9359"
    },
    {
      "_id": 28,
      "picture": "https://randomuser.me/api/portraits/thumb/men/31.jpg",
      "age": 20,
      "name": "Hoover Clemons",
      "gender": "male",
      "company": "Earthpure",
      "email": "hooverclemons@earthpure.com",
      "phone": "+1 (860) 544-3286",
      "address": "540 Cox Place, Winchester, Montana, 9013"
    },
    {
      "_id": 29,
      "picture": "https://randomuser.me/api/portraits/thumb/men/29.jpg",
      "age": 24,
      "name": "Bryan Hogan",
      "gender": "male",
      "company": "Chorizon",
      "email": "bryanhogan@chorizon.com",
      "phone": "+1 (909) 555-3900",
      "address": "314 Franklin Street, Coalmont, Connecticut, 1173"
    }
  ]

});
