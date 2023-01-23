import { EdgeConfig } from "../Visualizer/types";

export const edges: EdgeConfig[] = [
  {
    source: "users",
    sourceKey: "id",
    target: "purchases",
    targetKey: "user_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "books_users",
    targetKey: "user_id",
    relation: "hasMany"
  },
  {
    source: "products",
    sourceKey: "id",
    target: "purchases",
    targetKey: "product_id",
    relation: "hasMany"
  },
  {
    source: "books",
    sourceKey: "id",
    target: "books_users",
    targetKey: "book_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "profiles",
    targetKey: "user_id",
    relation: "hasOne"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "accounts",
    targetKey: "user_id",
    relation: "hasOne"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "devices",
    targetKey: "user_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "adjust.callbacks",
    targetKey: "user_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "visitor_id",
    target: "web_analytics.pageviews",
    targetKey: "visitor_id",
    relation: "hasMany"
  },
  {
    source: "web_analytics.pageviews",
    sourceKey: "pageview_id",
    target: "web_analytics.events",
    targetKey: "pageview_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "mobile_analytics.events",
    targetKey: "user_id",
    relation: "hasMany"
  },
  {
    source: "users",
    sourceKey: "id",
    target: "users",
    targetKey: "referrer_id",
    relation: "hasMany",
    sourcePosition: "left",
    targetPosition: "left"
  },
];
