
[マークダウンの基本的使い方](https://qiita.com/tbpgr/items/989c6badefff69377da7)
[マークダウンの基本的使い方](https://backlog.com/ja/blog/how-to-write-markdown/)

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

## 環境設定（1 から設定する方法）

下記コマンドをターミナルで実行し package.json を作成
`npm init`

下記コマンドをターミナルで実行し React を実装
`npx create-next-app`

[React のインストール方法](https://react.dev/learn/start-a-new-react-project)

今回は Next.js は使用しないので下記コマンドをターミナルで実行し express をインストール
`npm install express`

[express のインストール方法](https://expressjs.com/ja/starter/installing.html)

下記コマンドをターミナルで実行し knex.js をインストールする
`npm install knex --save`
`npm install pg`

[express のインストール方法](https://knexjs.org/guide/#node-js)

package.json に scripts の追加が必要かも
`start`はアプリを起動するものにする
`build`は`npm install`と postgresql へマイグレートするもの