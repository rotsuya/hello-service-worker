https://rotsuya.github.io/hello-service-worker/

# hello-service-worker

## 概要は？

- ブラウザ側で動くプロキシのようなもの。

## どんなサンプルを書いてみる？

- なにか書いてみようと思った。
- その前に、どんなユースケースを想定するかを考える。

## どんなユースケースがあるのか？

- [MDN](https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API)等を読み、[Googleによるサンプル](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker)を全部試してみた。
- 今のところ、こんなユースケースが考えられる。
  - Push通知
  - データのバックグラウンド同期(Web Indexed Database等)
  - ファイルのプリフェッチ
  - 賢いキャッシュ
    - 例: Webフォントのみ、特定ドメインのみ  
  - WebSocketが使えない時にXHRでWebSocketをエミュレートする
  - RestAPIのエラーハンドリング
- ついでに、わかったこと。
  - 今のところ、Fetch APIとCache APIしか提供されない。
  - ServiceWorkerとWebページは、postMessgeでやりとりする。

## 疑問

- 使えるプロトコルは、ブラウザと同じ？

## 参考

- [MDN](https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API)
- [by W3C](http://www.w3.org/TR/service-workers/)
- [by IIJ 大津さん](http://d.hatena.ne.jp/jovi0608/20141204/1417697480)
  - [Simple Push](https://developer.mozilla.org/en-US/docs/Web/API/Simple_Push_API)
  - [Web Notifications](https://developer.mozilla.org/ja/docs/WebAPI/Using_Web_Notifications)
- [by Asial](http://blog.asial.co.jp/1347)
- [by @yoheiMune](http://www.yoheim.net/blog.php?q=20141207)
- [Samples by Google](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker)
- [Samples by Google](https://github.com/rotsuya/trained-to-thrill)
- [最近の行儀のよい JavaScript の書き方](http://qiita.com/kaiinui/items/22a75d2adc56a40da7b7)
  - [Web Module Pattern](https://github.com/uupaa/WebModule/wiki/WebModulePattern)
    - [RequireJS等はもう古い。WebPackとは？]](http://ameblo.jp/ca-1pixel/entry-11884453208.html)
    - [AMD & RequireJS](http://qiita.com/nanocitrus/items/70f1316debf05b93ac82)
