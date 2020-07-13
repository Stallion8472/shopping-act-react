import { Server, Model } from "miragejs";

const ITEMS_PER_PAGE = 3;

export function makeServer() {
  return new Server({
    models: {
      item: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/items", (schema, request) => {
        const page = request.queryParams.page;
        let items = schema.items.all();
        const totalItems = items.length / ITEMS_PER_PAGE;
        const upperSlice =
          page * ITEMS_PER_PAGE > items.length
            ? items.length
            : page * ITEMS_PER_PAGE;
        items = items.models.slice(ITEMS_PER_PAGE * page - 3, upperSlice);
        return { items, totalItems };
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
      this.post("/submitOrder", () => {});
    },

    seeds(server) {
      server.create("item", {
        name: "Food",
        year: 2020,
        url: "1.jpg",
        price: 5,
        description: "The best food you've ever tasted",
      });
      server.create("item", {
        name: "Book",
        year: 2014,
        url: "2.jpg",
        price: 3,
        description: "A Long, but enjoyable read",
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
        description: "Loyal. This bear will never leave your side",
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
        description: "The only proper way of cooking food outside",
      });
    },
  });
}
