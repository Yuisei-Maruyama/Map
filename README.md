# my Google Maps

## projectの作成

```bash
% npx create-react-app --template typescript my-google-map

% cd my-google-map
```

## パッケージインストール

```bash
% npm i node-sass google-map-react --save
% npm i @react-google-maps/api
% npm i -D @material-ui/icons @material-ui/core eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged react-router react-router-dom sass-loader @types/node-sass @types/googlemaps @types/google-map-react
```

## Google Maps API Link

https://react-google-maps-api-docs.netlify.app/#section-getting-started

## React Google Maps API Style Guide

https://github.com/google-map-react/google-map-react#readme


## React Router

下記のように記述することで、指定したコンポーネントを表示可能にする。

```ts
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path={'/'} component={() => <Maps />} />
          <Route path={'/art'} component={() => <Art />} />
          <Route path={'/cafe'} component={() => <Cafe />} />
          <Route path={'/food'} component={() => <Food />}/>
        </Switch>
      </div>
    </Router>
  );
}
```

## React Hooks

- **useHistory**

ページ遷移させるときに使うhistoryを取得できる
```
const history = useHistory()
history.push('/')やhistory.goBack()
```

- **useLocation**

現在のページのURLのpathやqueryなどの情報を取得できる
```
const location = useLocation()
location.pathやlocation.search
```

- **useParams**

URLのパスの中で動的に変化する部分の値を取得できる


## React Hooks 型付け

> useState

`useState<型>(initial value)` で state に型を強制できる

ex.)
```ts
type categoryType = 'food' | 'art' | 'music'
const [type, setType] = useState<categoryType>('food')
```

## TypeScriptでwindow.googleと記述した際のエラーを解消する

`プロパティ 'google' は型 'Window & typeof globalThis' に存在しません。ts(2339)`

windowはgoogleというプロパティを持っていることを宣言することによって、上記エラーを回避する。

```ts
(src/types/index.d.ts)
interface GMapWindow extends Window {
  google: any;
}
export declare const window: GMapWindow
```
