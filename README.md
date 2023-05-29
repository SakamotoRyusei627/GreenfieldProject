# GreenfieldProject#　皿井

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

Package.json に以下記載の上 ターミナルで`npm install`（）
`  "dependencies": {`
`    "react": "^18.2.0",`
`    "react-dom": "^18.2.0",`
`    "react-scripts": "^5.0.1"`
