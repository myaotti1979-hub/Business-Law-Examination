# 法務検定 学習 v5.3

ビジネス実務法務検定試験® 2級・1級対策 PWA学習アプリ

## コンテンツ

| 項目 | 内容 |
|------|------|
| テキスト 2級 | 8章54セクション（quiz270問） |
| テキスト 1級 | 7章23セクション（quiz115問） |
| 演習問題 | 2級255問 / 1級10問 |
| 模擬試験 | 3回分（各40問/90分/70点合格） |
| トレーニング | 130問 |
| 条文辞典 | 239条（22法令） |
| **総問題数** | **890問** |

## 機能

- 📖 学習テキスト（セクション練習付き）
- 📝 演習（15問ランダム / 全問 / 弱点集中）
- 🎯 模擬試験（本試験完全準拠・一括採点方式）
- 📊 分析ダッシュボード
- 📜 条文辞典（2階層アコーディオン）
- 🤖 AI添削（1級論述/Gemini API）
- 📱 PWA対応（オフライン学習可能）

## ファイル構成

```
├── index.html          ← メインアプリ
├── sw.js               ← Service Worker
├── manifest.json       ← PWAマニフェスト
├── .nojekyll           ← GitHub Pages設定
├── README.md
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── data/
    ├── grade2.json     ← 2級演習問題
    ├── grade1.json     ← 1級演習問題
    ├── mock.json       ← 模擬試験（3回分）
    ├── textbook.json   ← 学習テキスト
    ├── laws.json       ← 条文辞典
    └── training.json   ← トレーニング
```

## デプロイ

GitHub Pagesで公開。リポジトリのSettings → Pages → Source: main branchで有効化。

## 技術仕様

- Vanilla JS（フレームワーク不使用）
- Service Worker: HTML/JSONはネットワーク優先、その他はキャッシュ優先
- JSONにAPP_VERベースのキャッシュバスター付与
- Gemini API: デュアルAPIキー（無料枠/Pro枠）
