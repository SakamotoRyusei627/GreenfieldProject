/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posted").del();
  await knex("posted").insert([
    {
      title: "useStateの使い方が分からなかった",
      posted_date: "20230501",
      tag: "react",
      keyword: "react 公式ドキュメント",
      url: "https://ja.legacy.reactjs.org/docs/getting-started.html",
      pict_url:
        "https://design-spice.com/wp/wp-content/uploads/2020/07/img_main_react-begginer-1.png",
    },
    {
      title: "PostgreSQL Doc",
      posted_date: "20230510",
      tag: "PostgreSQL",
      keyword: "PostgreSQL 公式ドキュメント",
      url: "https://www.postgresql.jp/document/10/html/index.html",
      pict_url: "",
    },
    {
      title: "超初心者向け GitHubの使い方 ~ ブランチ",
      posted_date: "20230520",
      tag: "git",
      keyword: "git branch, git checkout",
      url: "https://magazine.techacademy.jp/magazine/6235",
      pict_url:
        "https://magazine-cf.techacademy.jp/wp-content/uploads/2017/06/13142834/c82419bf3114a96e9bcb7fdd6197091a-800x450.jpg",
      // <meta property="og:image" content="https://~" から持ってくる
    },
    {
      title: "TypeScript + Node.js プロジェクトのはじめかた2020",
      posted_date: "20230530",
      tag: "TypeScript",
      keyword: "TypeScript + Node.js のプロジェクトを作成",
      url: "https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49",
      pict_url:
        "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&amp;w=1200&amp;mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9VHlwZVNjcmlwdCUyMCUyQiUyME5vZGUuanMlMjAlRTMlODMlOTclRTMlODMlQUQlRTMlODIlQjglRTMlODIlQTclRTMlODIlQUYlRTMlODMlODglRTMlODElQUUlRTMlODElQUYlRTMlODElOTglRTMlODIlODElRTMlODElOEIlRTMlODElOUYyMDIwJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0zODc3ZjRhOTU1NjFiYjIxMTU2ZmVkNTRhNDgyMDUwYw&amp;mark-x=142&amp;mark-y=112&amp;blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbm90YWthb3MmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWY5NTQ2ZGQ1YWM0OGNlM2Q0NzBmZDAwMzVhZjcxODA3&amp;blend-x=142&amp;blend-y=491&amp;blend-mode=normal&amp;s=5fd985da6a1d085e83b0481ad0254d6e",
      //何故か表示されず？
    },
    {
      title: "React, Express でSSRを実現する",
      posted_date: "20230530",
      tag: "Express",
      keyword: "CSR(Client Side Rendering), SSR (Server Side Rendering)",
      url: "https://zenn.dev/b1essk/articles/ssr-with-react-express",
      pict_url:
        "https://res.cloudinary.com/zenn/image/upload/s--FY1cI-4f--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:React%252C%2520Express%2520%25E3%2581%25A7SSR%25E3%2582%2592%25E5%25AE%259F%25E7%258F%25BE%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Kazuhiro%2520Mimaki%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzgwODIzZmQ0N2EuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png",
    },
  ]);
};

// return knex.schema.createTable("posted", (table) => {
//   table.increments("id").primary();
//   table.string("title", 128).notNullable();
//   table.integer("posted_date").notNullable();
//   table.string("tag", 64).notNullable();
//   table.string("keyword", 64).notNullable();
//   table.text("url").notNullable();
//   table.text("pict_url");
