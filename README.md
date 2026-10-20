# ほのぼのワーカーズ｜LINEスタンプ紹介サイト

「ほのぼのワーカーズ」紹介ページの静的サイトです。HTML・CSS・JavaScriptのみで動きます。スマートフォン対応済み。

## まずサイトを見る

`index.html` をChromeなどのブラウザーで開いてください。商品一覧のサムネイルには同梱の画像ファイルを使います。LINE STOREの画像取得に依存しません。

## 無料で公開する（GitHub Pages）

1. GitHubにログインして、新しい **Public** リポジトリを作成します（例：`honobono-workers`）。
2. このフォルダ内の `index.html`、`styles.css`、`script.js`、`assets` フォルダを、リポジトリ直下にアップロードします（ZIPファイル自体をそのままアップロードしないでください）。
3. リポジトリの **Settings → Pages → Build and deployment** で、**Deploy from a branch** を選択します。
4. **Branch: main / Folder: / (root)** を選択し保存します。
5. 公開後、Pagesの画面に表示されたURLから確認します。

サイトはすでに外部公開できる構成ですが、アップロード・公開操作はしていません。

## 審査待ち3作品の公開後に更新するところ（重要）

`index.html` をエディターで開いて、次の3作品のカードを更新してください。

- がんばるくん〈オフィス〉
- がんばるちゃん〈お祝い〉
- がんばるくん〈お祝い〉

各カードの `class="coming-soon"` を含むブロックは「公開準備中」表示になっています。公開後は、該当箇所を次の形式に置き換えてください。

```html
<div class="card-bottom">
  <strong>¥190</strong>
  <a href="確認した正しい購入ページURL" class="card-cta" target="_blank" rel="noopener noreferrer">購入ページへ <span>↗</span></a>
</div>
```

未公開作品の販売リンクは確認できていないため、架空のURLを入れていません。公開後にLINE Creators Market「表示情報 → 購入用URL」でリンクを取得してください。

## URL確認済みの5商品

- がんばるくん・ブルー：<https://store.line.me/stickershop/product/37341957/ja>
- がんばるくん・グレー：<https://store.line.me/stickershop/product/37349659/ja>
- がんばるちゃん・ブルー：<https://store.line.me/stickershop/product/37352826/ja>
- がんばるちゃん・グレー：<https://store.line.me/stickershop/product/37385986/ja>
- がんばるちゃん・事務職：<https://store.line.me/stickershop/product/37397033/ja>
- 作者ページ：<https://store.line.me/stickershop/author/6753349/ja>

## 公開後にやると良いこと

- `<meta property="og:image">` の画像URLを、公開サイトの絶対URLに変更（SNSのプレビュー表示に必要な場合があります）。
- Google Search Consoleに登録し、公開URLのインデックス登録をリクエストする。
- 商品が増えたらカードを追加し、各フィルターボタンの件数を更新する。
- 販売価格が変更された場合はサイト内の価格を更新する。

## 使用素材

キャラクター画像はチャットで共有されたユーザー制作のイラスト、商品一覧のスクリーンショット、および確認済みのLINE STORE公式メイン画像へのリンクを使用しています。第三者の無関係なキャラクター画像は使用していません。

## 商品一覧サムネイルの差し替え（2026年10月20日）

| 商品 | 採用画像 | ファイル |
|---|---|---|
| 男性・ブルー | いいね！ | `assets/thumb-boy-blue-iine.webp` |
| 男性・グレー | **OKです（未差し替え）** | 元画像を取得できなかったため現在 `assets/cover-boy-gray.webp` を継続使用 |
| 女性・ブルー | お願いします | `assets/thumb-girl-blue-onegaishimasu.webp` |
| 女性・グレー | おつかれさまです | `assets/thumb-girl-gray-otsukaresama.webp` |
| 女性・事務職 | ありがとうございます | `assets/thumb-girl-office-arigatou.webp` |
| 男性・オフィス | いいね！ | `assets/thumb-boy-office-iine.webp` |
| お祝い女性 | お誕生日おめでとう！ | `assets/thumb-girl-celebrate-birthday.webp` |
| お祝い男性 | おめでとう！ | `assets/thumb-boy-celebrate-omedetou.webp` |

男性・グレーの「OKです」の元のPNG画像が手に入ったら、画像を `assets/thumb-boy-gray-ok.webp` に変換して追加し、`index.html` 内の男性グレーの `src` をそのファイルに変更してください。この未差し替え箇所は画像を捏造せず明示的に残しています。
