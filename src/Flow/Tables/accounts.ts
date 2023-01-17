const accountsTable = {
  name: "accounts",
  description: "Hello World",
  columns: [
    {
      name: "id",
      description: "Unique identifier of an account.",
      handleType: "source",
      key: true,
      type: "integer"
    },
    {
      name: "user_id",
      description: "User’s id.",
      handleType: "target",
      type: "integer"
    },
    {
      name: "platform",
      description: "Account’s platform. Bindle allows email and facebook signups.",
      type: "text"
    },
    {
      name: "email",
      description: "Email attached to the account. Note that different platforms could have different emails.",
      type: "text"
    },
    {
      name: "created_at",
      description: "Timestamp when this account was created. created_at of the first account is user’s signup timestamp.",
      type: "datetime"
    },
  ]
};

export default accountsTable;
