import { Server, Model } from "miragejs";

export function makeServer() {
  return new Server({
    models: {
      item: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/items", (schema) => {
        return schema.items.all()
      });

      this.get("/items/:id", (schema, request) => {
        return schema.items.find(request.params.id)
      });

      this.get("/newItems", (schema, request) => {
        return schema.items.where({ year: new Date().getFullYear() })
      });
    },
    seeds(server) {
        server.create("item", { name: "Food", year: 2010 })
        server.create("item", { name: "Book", year: 2014 })
        server.create("item", { name: "Car", year: 2017 })
        server.create("item", { name: "Toy", year: 2017 })
        server.create("item", { name: "Toilet Paper", year: 2020 })
        server.create("item", { name: "Charcol", year: 2020 })
    }
  });
}
