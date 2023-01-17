const productsTable = {
  name: "products",
  description: "The list of all purchasable Bindle products (subscriptions).",
  columns: [
    {
      name: "id",
      description: "Unique identifier of a product.",
      handleType: "source",
      key: true,
      type: "integer"
    },
    {
      name: "name",
      description: "Name of a product.",
      type: "text"
    },
    {
      name: "price",
      description: "Price of a product",
      type: "float"
    }
  ]
};

export default productsTable;
