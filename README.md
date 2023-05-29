
[マークダウンの基本的使い方①](https://qiita.com/tbpgr/items/989c6badefff69377da7)  
[マークダウンの基本的使い方②](https://backlog.com/ja/blog/how-to-write-markdown/)

## Git

- `git branch` コマンドを実行して、ローカルに "morisaki" ブランチが作成されているかどうか確認。  
もし存在しない場合は、`git checkout -b morisaki` コマンドを使用して新しいブランチを作成。  

- **新しいブランチを作成し、それに切り替える**  
`git checkout -b morisaki`  
これにより、"morisaki" ブランチが作成され、現在のブランチが "morisaki" に切り替わる。  

- **変更をコミットする**  
`git commit -m "Commit message"`  
必要な変更をステージングし、コミットメッセージと共にコミットする。  

- **リモートリポジトリにブランチをプッシュする**  
`git push origin morisaki`  
これにより、"morisaki" ブランチがリモートリポジトリの "origin" にプッシュされる。  

## 環境設定（一から設定する方法）

1. Node.jsのインストール  

> ReactとExpressを使用する場合、通常はpackage.jsonを分けることが推奨される。  
> これにより、それぞれのパッケージの依存関係とスクリプトを独立して管理できる。  

1. Expressのセットアップ: コマンドラインでプロジェクトディレクトリに移動し、  
以下のコマンドを実行してExpressをインストール  
`npm install express`  

1. Expressアプリケーションのファイル（例: server.js）を作成する。  

[express のインストール方法](https://expressjs.com/ja/starter/installing.html)

1. Reactのセットアップ: プロジェクトディレクトリで以下のコマンドを実行  
`npx create-react-app client`  
これにより、新しい"client"ディレクトリが作成され、Reactプロジェクトがセットアップされる。  

[React のインストール方法](https://react.dev/learn/start-a-new-react-project)

1. Knexのセットアップ: コマンドラインでプロジェクトディレクトリに戻り、  
以下のコマンドを実行してKnexをインストール  
`npm install knex`  

1. プロジェクトディレクトリ内にknexfile.jsを生成  
`npx knex init`  

1. knexfile.jsをテキストエディタで開き、データベースの接続設定を編集  
```
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'greenfield',
      user: "user",
      password: 'user'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
```

1. データベースのマイグレーションファイルとシーディングファイルを保存するため  
"migrations"と"seeds"ディレクトリを作成  

[knex のインストール方法](https://knexjs.org/guide/#node-js)

1. PostgreSQLのNode.js用ドライバであるpgパッケージをインストールするためのコマンド。  
`npm install pg`  
Knexと連携してPostgreSQLデータベースを使用する場合には、pgパッケージもインストールする必要がある。  