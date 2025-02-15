import { routes } from "../routes/index.js";

import { Database } from "../database/database.js";

const database = new Database();

export function routeHandler(request, response){
  const route = routes.find((route)=>{
    console.log(route.path)
    console.log(request.url)
    return route.method === request.method && route.path.test(request.url)
  });

  if(route){
    return route.controller({request, response, database});
  }

  return response.writeHead(404).end("Não encontrada.");

}