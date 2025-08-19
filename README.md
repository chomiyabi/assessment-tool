# 生成AI活用 業務効率化アセスメントツール

企業が自社の業務における生成AI活用のポテンシャルと現状の課題を可視化するWebベースのアセスメントツールです。

## 📋 プロジェクト概要

このツールは、ユーザーがWebサイト上で複数の質問に回答することで、自社の業務効率化の可能性や生成AI活用の成熟度を簡易的に診断できるウェブアプリケーションです。

## 🏗️ システム構成

```
Assessment Tool/
├── frontend/                  # フロントエンド（HTML/CSS/JS）
│   ├── index.html            # メインHTMLファイル
│   ├── css/
│   │   └── style.css         # スタイルシート
│   ├── js/
│   │   └── app.js           # メインJavaScript
│   └── assets/
│       └── images/          # 画像ファイル
├── backend/                   # バックエンド（Google Apps Script）
│   ├── Code.gs              # メインGASファイル
│   └── appsscript.json      # GAS設定ファイル
├── spreadsheet/              # データベース設計
│   └── structure.md         # スプレッドシート構造定義
├── docs/                     # ドキュメント
│   ├── Spec.md              # 要件定義書
│   ├── Development_Plan.md  # 開発計画書
│   └── Cases/               # UIリファレンス画像
│       ├── 2.png            # 概要説明ページ
│       ├── 3.png            # プライバシーポリシー
│       ├── 4.png            # 個人情報入力
│       ├── 5.png            # 診断ページ
│       └── 6.png            # 診断結果
├── .gitignore               # Git除外設定
└── README.md                # このファイル
```

## 🛠️ 技術スタック

- **フロントエンド**: HTML5, CSS3, JavaScript (ES6+)
- **バックエンド**: Google Apps Script (GAS)
- **データベース**: Google スプレッドシート
- **バージョン管理**: Git / GitHub

## 📊 開発進捗

### Phase 1: 基盤構築 🔄
- [x] Step 1.1: プロジェクト構造作成 ✅
- [ ] Step 1.2: Google スプレッドシート作成
- [ ] Step 1.3: Google Apps Script プロジェクト作成

### Phase 2: 静的フロントエンド実装 ⏳
- [ ] 共通テンプレート作成
- [ ] 各ページ実装（P-01〜P-05）

### Phase 3: GAS API実装 ⏳
- [ ] 各APIエンドポイント実装

### Phase 4: フロント・バック連携 ⏳
- [ ] API通信機能実装

### Phase 5: 結果表示機能高度化 ⏳
- [ ] レーダーチャート実装

### Phase 6: 最終調整 ⏳
- [ ] エラーハンドリング・最適化

### Phase 7: テスト・デプロイ ⏳
- [ ] 統合テスト・本番環境準備

## 🎨 デザインシステム

### カラーパレット
- **ベースカラー**: #FFFFFF
- **ヘッダー背景**: #1B2951
- **プライマリカラー**: #4A90E2
- **セカンダリカラー**: #EC892E
- **背景グレー**: #F5F5F5
- **テキストカラー**: #333333

### タイポグラフィ
- **フォント**: "Noto Sans JP", sans-serif
- **見出し**: 32px (h1), 24px (h2), 20px (h3)
- **本文**: 16px

## 🚀 ローカル開発

### 前提条件
- Googleアカウント
- Webブラウザ（Chrome推奨）
- テキストエディタ

### 開発サーバー起動
```bash
# Python使用の場合
cd frontend
python -m http.server 8000

# Node.js使用の場合
npx http-server frontend -p 8000
```

### ブランチ運用
- `main`: 本番環境
- `develop`: 開発統合ブランチ
- `feature/*`: 機能開発ブランチ

## 📖 ドキュメント

- [要件定義書](docs/Spec.md) - 詳細な仕様書
- [開発計画書](docs/Development_Plan.md) - フェーズ別開発計画
- [スプレッドシート構造](spreadsheet/structure.md) - データベース設計

## 📝 ライセンス

このプロジェクトは開発中です。

## 🤝 貢献

このプロジェクトは現在開発中です。

---

**現在の開発状況**: Phase 1 - Step 1.1 完了 ✅  
**最終更新**: 2025-01-19