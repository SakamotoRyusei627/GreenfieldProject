# GreenfieldProject#　皿井

## Git 操作

### リポジトリ作成

[リポジトリの作成](https://magazine.techacademy.jp/magazine/6235#sec3_1)
GitHub にログインした状態で以下にアクセス
https://github.com/new
「Repository name」の入力、必要に応じて「Description」も入力。
種類「Public」or「Private」選択。
※ソースコードを公開したくない場合は「Private」を選択
README ファイル作成の場合は「Initialize this repository with a README」にチェック。
.gitignore や license については後で追加や変更ができるので、None を選択。

### ローカルにクローンし作業場所準備

ローカルの所定の場所にクローン
｀ git clone (Code-SSH)`

### 作業用ブランチを設定

・ブランチ確認
`git branch`
作業中ブランチに＊
作業用ブランチない場合、新しいブランチを作成し、切り替え
`git checkout -b new_sarai`
これにより、"new_sarai" ブランチ
が作成され、現在のブランチが "new_Sarai" に切り替わる。

### 作業用ブランチに移動

`git checkout sarai`
※ブランチない場合、新規に作成
`git branch sarai`
・作業ブランチ再確認
`git branch`

### 更新ファイルのブランチへの push

（ファイル作成）
・作業ブランチ再確認
`git branch`
・git に追加、コミット
`git add .`
`git commit -m "add file frontend#1"`
・git（ブランチ）にプッシュ
`git push origin sarai`
git ブランチ上のファイル更新を確認

※※ここまでお試し済み

### ブランチから pull

対象のリポジトリ（リモートブランチ???）に入る（チェックアウト）
`git checkout ???`
リモートブランチ??? のコード取得
`git pull`

## Front／Back 共通

### Package.json 作成

ターミナル
`npm init`

##　バックエンド

### Express のインストール　

ターミナル
`npm install express`
server.js を作成
[sprint.express-http](https://github.com/codechrysalis/dig-imr-4-sprint.express-http)

### nodemon をインストール

ターミナル
`npm install --save-dev nodemon`

### knex のインストール

## フロントエンド

### react のインストール ~ パターン１　

npx create-react-app sampleapp※ ※プロジェクト名(小文字)
cd sampleapp
npm start

### react のインストール ~ パターン２　 npm 依存パッケージをインストール

Package.json に以下記載の上 ターミナルで`npm install`
`  "dependencies": {`
`    "react": "^18.2.0",`
`    "react-dom": "^18.2.0",`
`    "react-scripts": "^5.0.1"`
