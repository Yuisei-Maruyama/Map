# my Google Maps

## projectの作成

```bash
% npx create-react-app --template typescript my-google-map

% cd my-google-map
```

## パッケージインストール

```bash
% npm i @react-google-maps/api
% npm i -D @material-ui/icons @material-ui/core eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
% npm i
```

## Google Maps API Link

https://react-google-maps-api-docs.netlify.app/#section-getting-started

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
