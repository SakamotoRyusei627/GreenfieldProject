export interface table {
  All: string;
  id: number;
  title: string;
  postedDate: number;
  tag: string;
  keyword: string;
  url: string;
  pictureUrl: string;
}

// exports.up = function (knex) {
//   return knex.schema.createTable("posted", (table) => {
//     table.increments("id").primary();
//     table.string("title", 128).notNullable();
//     table.integer("posted_date").notNullable();
//     table.string("tag", 64).notNullable();
//     table.string("keyword", 64).notNullable();
//     table.text("url").notNullable();
//     table.text("pict_url");
//   });
// };
