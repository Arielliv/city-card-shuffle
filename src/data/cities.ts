export interface City {
    id: string;
    name: string;
    imageUrl: string;
  }
  
  export const cities: City[] = [
    {
      id: "paris",
      name: "Paris",
      imageUrl: "https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg",
    },
    {
      id: "tokyo",
      name: "Tokyo",
      imageUrl: "https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg",
    },
    {
      id: "newyork",
      name: "New York",
      imageUrl: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    },
    {
      id: "sydney",
      name: "Sydney",
      imageUrl: "https://cdn.britannica.com/71/188471-050-CF188A6B/Sydney-Opera-House-Port-Jackson.jpg",
    },
    {
        id: "dubai",
        name: "Dubai",
        imageUrl: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1643335346/jz3dgf8difcvsckzww5c.jpg",
      },
    {
      id: "bangkok",
      name: "Bangkok",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Z9owEq_h7WJlJON0cPPy3bcfo-uDIQ5Uvg&s",
    },
    {
      id: "cape_town",
      name: "Cape Town",
      imageUrl: "https://africanbluetours.com/wp-content/uploads/2015/04/cape_town.jpg",
    },
    {
      id: "reykjavik",
      name: "Reykjavik",
      imageUrl: "https://lp-cms-production.imgix.net/2024-06/GettyImages-661798951.jpeg?w=1440&h=810&fit=crop&auto=format&q=75",
    },
    {
      id: "venice",
      name: "Venice",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7TugCGFOgXvqaXUzixMZPRNYYK0fIAI1Tw&s",
    },
    {
      id: "barcelona",
      name: "Barcelona",
      imageUrl: "https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-barcelona-1.jpg",
    },
    {
      id: "kyoto",
      name: "Kyoto",
      imageUrl: "https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg",
    },
    {
      id: "queenstown",
      name: "Queenstown",
      imageUrl: "https://res.cloudinary.com/thl/image/upload/q_85,f_auto,w_1180,c_limit/v1724109345/rh9jlhrftk3wbwei1meu.jpg",
    },
    {
      id: "marrakech",
      name: "Marrakech",
      imageUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/03/15/marrakech-hero.jpg",
    },
    {
      id: "hawaii",
      name: "Hawaii",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLv36g5v3iV4A2gYoZZDzJw91MzLqsB4juQ&s",
    },
    {
      id: "whistler",
      name: "Whistler",
      imageUrl: "https://scene7.vailresorts.com/is/image/vailresorts/600x360_WhistlerVillage_Summer-1?resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    },
  ];
  
  
  export const TARGET_CITY_ID = "dubai"; // Pre-selected city to stop on