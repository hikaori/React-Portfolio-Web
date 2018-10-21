Reactのポートフォリオの作り方を順を追って説明しています。
番号はコミットについている番号を反映しています。

## 1. まずはプロジェクトを作成してコミットしよう！

### Npmの場合

```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

*npmがない人はinstallしてください　
https://nodejs.org/en/download/package-manager/

### yarn の場合

```
$ npx create-react-app my-app
$ cd my-app
$ yarn start
```

*Yarnがない人はinstallしてください　
https://yarnpkg.com/en/docs/install#mac-stable

## 2. App.jsの中身を作成していく
コミットの内容通りに作成

## 3. Sassを使える様にする

A. `npm run eject` もしくは　`yarn run eject`
をするとconfigを含めた色々なファイルが作成される

B. `npm install sass-loader node-sass --save-dev` もしくは　`yarn add sass-loader node-sass --save-dev`

C. あとはこの参照の通りに`webpack.config.dev.js`の中身を変えてください
How to add Sass from create-react-app
https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc


- Webpackを軽く説明

## *React等に便利なパッケージをテキストエディタ入れてみよう!

- React-Native/React/Redux snippets for es6/es7
- Bracket Pair Colorizer
- Material Icon Theme
- ESLint

## 4. HeaderとFooter Componentを作成!

- Componentの説明: どういう時にComponentを使うか
- ファイル構成の説明: どういうファイル構成が望ましいか
- importの説明: Componentの中にどうやってファイルを読み込むか
- sass説明: sass, mixin, functions, variablesが便利な理由

## 休憩？10分 (15:30くらいの予定)

## 5.　PortfolioItem Componentの作成

- 5-1: コミット通りに作成してください
- 5-2: コミット通りに作成してください
- 5-3: StateとDestructuringの説明

## 6. PortfolioItemにPropsを送る

- PropsとStateについて説明

## 7. Constants ファイルからデータをmapする

- Constantsファイルの使い方
- UrlをConstantsを読める様にするには、ModuleScopePluginを外す
https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
- 並列をMAPする(*key attributeを忘れずに!*)
- css Gridについて

## 8. Container Componentを作って ChildrenをPropsをしてパスしよう

- Childrenの説明


### ==== Level-2 ======

### 1. [今日使うパッケージを全部インストールしておこう!](https://github.com/Saayaman/2_react_learning/commit/381044e807246636bce1ef2e5af2c928e9970c69)

#### Npmの場合

```
$ npm i react-media 
$ npm i prop-types
$ npm i classnames
$ npm i react-router
$ npm i react-router-dom
```

#### yarn の場合

```
$ yarn add react-media 
$ yarn add prop-types
$ yarn add classnames
$ yarn add react-router
$ yarn add react-router-dom
```

### 2. [react-mediaでヘッダーのアイコンを見せる](https://github.com/Saayaman/2_react_learning/commit/4280b237fc39a0dfd92049aff1cb723822497891)
コミットの内容通りに作成


### 3-1. [classnamesでクラス名を出しわけする その１](https://github.com/Saayaman/2_react_learning/commit/aa14caf826dca2c5898022fe0041be47478b0c7c)

### 3-2. [classnamesでクラス名を出しわけする その2](https://github.com/Saayaman/2_react_learning/commit/6c7bf8eac57db402adbf36671fa4dc149eda50df)

### 4. [prop-typesでタイプチェッキング](https://github.com/Saayaman/2_react_learning/commit/352580a39cb8a8108b92701939ec2bcc1ddd44ac)

### 5-1. [react-routerでリンクのパスを作る](https://github.com/Saayaman/2_react_learning/commit/53655c2f40c104970d0519f2f23abb95f7065457)



### 5-2. [HeaderのNavにリンクを作る](https://github.com/Saayaman/2_react_learning/commit/d4c845846282ced7f5d73bca763affec2760df8d)

### 5-3. [ヘッダーのメニューにactive cssを加える](https://github.com/Saayaman/2_react_learning/commit/2b7b304df27a0392e1296c89644ef86cb0564f6c)

### 5-4. [Portfolioアイテムの個別ページを作ってリンクさせる](https://github.com/Saayaman/2_react_learning/commit/573937a81172545d4d9a253a9395f4d5babed158)

#### ボーナス問題.　ヘッダーロゴがトップページにリンクされる様にしてください。(答えなし)

### *[css をちょっと直す](https://github.com/Saayaman/2_react_learning/commit/b93521b975f4a9b72513f433217684f832502d6a)

### 6.見ずにやってみよう!!!

**正解は一つじゃないので、自分ができそうな方法で実行して見てください
**ネットを調べてもOK
**デザインの良し悪しは今回は重要じゃないです

#### お題：
Headerのアイコンをボタン化して、クリックしたらドロップダウンが現れるようにしてください。
(スマフォサイズのみです)

#### ヒント： 
ドロップダウンの表示、非表示をコントロールするにはStateが使えます。

ヒントステップ(自分のコミットと順番が違うので注意)
0. スマフォサイズ様にドロップダウンメニューを作ってください
1. メニューボタンがクリックできるようにしてください。
2. ドロップダウンのon/offの状態をトラッキングできる`state`を作ってください。`showDropdown` という名前がいいですね
- (これは on/offの2パターンしかないので、boolean(true or false)です)
3. クリックしたらsetState({})で`state`を
変更してください。
4.showDropdownの状態が　`false`でドロップダウンメニューを非表示、`true`で表示されるようにしてください
