import { Server, Model } from "miragejs";

export function makeServer() {
  return new Server({
    models: {
      item: Model,
    },
    
    routes() {
      this.namespace = "api";

      this.get("/items", (schema) => {
        return schema.items.all();
      });

      this.get("/items/:id", (schema, request) => {
        return schema.items.find(request.params.id);
      });

      this.get("/newItems", (schema) => {
        return schema.items.where({ year: new Date().getFullYear() });
      });

      this.get("/favItems", (schema) => {
        return schema.items.where({ year: new Date().getFullYear() - 1 });
      });
    },

    seeds(server) {
      server.create("item", {
        name: "Food",
        year: 2020,
        url: "1.jpg",
        price: 5,
        description: "Best food you've ever tasted",
      });
      server.create("item", {
        name: "Book",
        year: 2014,
        url: "2.jpg",
        price: 3,
        description: "Long, but enjoyable read",
      });
      server.create("item", {
        name: "Car",
        year: 2020,
        url: "3.jpg",
        price: 25,
        description: "Classic",
      });
      server.create("item", {
        name: "Toy",
        year: 2019,
        url: "4.jpg",
        price: 15,
        description: "Loyal. Will never leave your side",
      });
      server.create("item", {
        name: "Toilet Paper",
        year: 2020,
        url: "5.jpg",
        price: 10,
        description: "We all have to use it",
      });
      server.create("item", {
        name: "Charcol",
        year: 2020,
        url: "6.jpg",
        price: 18,
        description: "Only proper way of cooking food outside",
      });
    },
  });
}
