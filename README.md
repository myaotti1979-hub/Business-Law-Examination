# 法務検定 学習 — ビジネス実務法務検定試験® PWA

オフライン対応のPWA学習アプリ。GitHub Pagesでホスティング可能。

## デプロイ方法

### 1. GitHubリポジトリを作成

```bash
# zipを展開
unzip houmu-pwa.zip
cd pwa

# Gitリポジトリ化
git init
git add .
git commit -m "初回コミット"

# GitHubにpush（リポジトリを事前に作成しておく）
git remote add origin https://github.com/YOUR_USERNAME/houmu-pwa.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pagesを有効化

1. リポジトリの **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. **Save**

数分後に `https://YOUR_USERNAME.github.io/houmu-pwa/` でアクセス可能になります。

### 3. スマホにインストール (PWA)

1. スマホのブラウザで上記URLにアクセス
2. **「ホーム画面に追加」**（iOS: 共有ボタン → Android: メニュー →）
3. アプリアイコンから起動可能に
4. オフラインでも動作（初回アクセス後）

## ファイル構成

```
pwa/
├── index.html          ← メインアプリ（vanilla JS、フレームワーク不要）
├── manifest.json       ← PWAマニフェスト
├── sw.js              ← Service Worker（オフライン対応）
├── data/
│   ├── laws.json      ← 条文辞典（30+条文の原文）
│   ├── grade2.json    ← 2級 演習問題
│   ├── grade1.json    ← 1級 演習問題
│   └── training.json  ← パーツ練習問題（2級+1級）
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## 問題の追加方法

各JSONファイルを編集して問題を追加できます。

### 2級問題の形式 (`data/grade2.json`)

```json
{
  "id": 99,
  "a": "企業取引",           // 分野名
  "t": "combo",              // combo=組み合わせ, scenario=事例, single=単答
  "q": "問題文...",
  "s": ["ア　...","イ　...","ウ　...","エ　...","オ　..."],  // comboの場合
  "c": ["ア・イ","ア・ウ","イ・エ","ウ・オ","エ・オ"],        // comboの選択肢
  "ch": ["選択肢①","選択肢②","選択肢③","選択肢④"],          // single/scenarioの場合
  "ans": 1,                  // 正解のインデックス(0始まり)
  "ex": "解説テキスト...",
  "laws": ["民法555条","民法557条"]  // 参照条文キー(laws.jsonのキー)
}
```

### Gemini API

1級のAI添削には Google Gemini API キーが必要です。
アプリ内の「設定」から登録してください（localStorageに保存）。

[Google AI Studio](https://aistudio.google.com/apikey) で無料取得可能。

## 技術仕様

- **フレームワーク不要**: Vanilla JS（CDN依存なし）
- **オフライン対応**: Service Worker + Cache API
- **データ永続化**: localStorage（APIキー等）
- **AI添削**: Gemini 2.0 Flash API
- **PWA対応**: manifest.json + Service Worker
