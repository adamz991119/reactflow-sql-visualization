const purchasesTable = {
  name: "purchases",
  columns: [
    {
      name: "id",
      type: "number",
      key: true
    },
    {
      name: "user_id",
      handleType: "target",
      type: "number"
    },
    {
      name: "product_id",
      handleType: "target",
      type: "number"
    },
  ]
};

export default purchasesTable;
