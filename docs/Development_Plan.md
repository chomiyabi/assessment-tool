# 生成AI活用 業務効率化アセスメントツール - 開発計画書

## 1. 開発方針

### 1.1 基本原則
- **段階的開発**: 小さな機能単位で開発・テストを繰り返す
- **エラー最小化**: 各ステップで動作確認を行い、問題を早期発見
- **Git管理**: 機能単位でコミット、ブランチ戦略の活用
- **ドキュメント駆動**: 実装前に仕様を明確化

### 1.2 ブランチ戦略
```
main (本番環境相当)
├── develop (開発統合ブランチ)
│   ├── feature/phase1-setup (基盤構築)
│   ├── feature/phase2-frontend-static (静的ページ作成)
│   ├── feature/phase3-gas-api (GAS API実装)
│   ├── feature/phase4-integration (フロント・バック連携)
│   ├── feature/phase5-visualization (結果表示機能)
│   └── feature/phase6-polish (最終調整)
└── hotfix/* (緊急修正用)
```

## 2. フェーズ別開発計画

### Phase 0: プロジェクト初期設定（現在）
**期間**: Day 1
**ブランチ**: main

#### タスク:
- [x] Git リポジトリ初期化
- [x] .gitignore 作成
- [x] 開発計画書作成
- [ ] 初回コミット
- [ ] GitHub リポジトリ作成・連携（オプション）

#### 成果物:
- `.gitignore`
- `Spec.md`
- `Development_Plan.md`
- `Cases/` フォルダ

#### Git操作:
```bash
git add .
git commit -m "Initial commit: Project setup with specifications"
```

---

### Phase 1: 基盤構築
**期間**: Day 2-3
**ブランチ**: feature/phase1-setup

#### Step 1.1: プロジェクト構造作成
```
Assessment Tool/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── images/
├── backend/
│   ├── Code.gs (Google Apps Script)
│   └── appsscript.json
├── spreadsheet/
│   └── template.md (スプレッドシート構造定義)
└── docs/
    ├── Spec.md
    ├── Development_Plan.md
    └── Cases/
```

**検証**: フォルダ構造の確認

#### Step 1.2: Google スプレッドシート作成
- スプレッドシート新規作成
- 4シート（設定、設問マスタ、回答データ、結果ロジック）追加
- サンプルデータ投入（3-5問程度）

**検証**: スプレッドシートの手動確認

#### Step 1.3: Google Apps Script プロジェクト作成
- GASプロジェクト新規作成
- スプレッドシートとの連携設定
- 基本的なdoGet()関数の実装

**検証**: GAS Webアプリとして公開、アクセス確認

#### Git操作:
```bash
git checkout -b feature/phase1-setup
git add .
git commit -m "feat: Create project structure and setup Google services"
git checkout develop
git merge feature/phase1-setup
```

---

### Phase 2: 静的フロントエンド実装
**期間**: Day 4-6
**ブランチ**: feature/phase2-frontend-static

#### Step 2.1: 共通テンプレート作成
- ヘッダー/フッターのHTML構造
- 基本的なCSSスタイル（カラーパレット、タイポグラフィ）
- レスポンシブ対応の基礎

**検証**: ブラウザで表示確認（PC/タブレット/モバイル）

#### Step 2.2: P-01 概要説明ページ
- HTML構造作成
- CSSスタイリング
- 「次へ」ボタンの実装（ページ遷移のみ）

**検証**: デザイン確認、ボタン動作確認

#### Step 2.3: P-02 プライバシーポリシーページ
- HTML構造作成
- チェックボックス実装
- ボタンの有効/無効切り替え

**検証**: チェックボックス動作確認

#### Step 2.4: P-03 個人情報入力ページ
- フォームHTML作成
- バリデーションUI（エラー表示領域）
- クライアントサイドバリデーション実装

**検証**: フォーム入力、バリデーション動作確認

#### Step 2.5: P-04 診断ページ（静的版）
- 質問表示エリア作成
- プログレスバー実装
- ページング機能（JavaScript）

**検証**: ページング動作、プログレス表示確認

#### Step 2.6: P-05 結果ページ（静的版）
- 結果表示レイアウト作成
- Chart.js導入とサンプルチャート表示

**検証**: レイアウト確認、チャート表示確認

#### Git操作:
```bash
git checkout -b feature/phase2-frontend-static
# 各ステップごとにコミット
git add frontend/
git commit -m "feat: Add common template and styles"
git commit -m "feat: Implement P-01 landing page"
git commit -m "feat: Implement P-02 privacy policy page"
git commit -m "feat: Implement P-03 registration form"
git commit -m "feat: Implement P-04 assessment page"
git commit -m "feat: Implement P-05 result page"
git checkout develop
git merge feature/phase2-frontend-static
```

---

### Phase 3: Google Apps Script API実装
**期間**: Day 7-9
**ブランチ**: feature/phase3-gas-api

#### Step 3.1: CORS設定とベースAPI
- doGet/doPost関数の基本実装
- CORS対応ヘッダー設定
- エラーハンドリング基盤

**検証**: Postmanまたはcurlでアクセステスト

#### Step 3.2: 設定情報API (/api/config)
- スプレッドシートから設定読み込み
- JSON形式でレスポンス

**検証**: APIレスポンス確認

#### Step 3.3: 設問取得API (/api/questions)
- 設問マスタシートから読み込み
- カテゴリ別に整理して返却

**検証**: 設問データの取得確認

#### Step 3.4: 個人情報登録API (/api/register)
- POSTデータの受け取り
- スプレッドシートへの書き込み
- セッションID生成

**検証**: データ登録とレスポンス確認

#### Step 3.5: 回答保存API (/api/answers)
- 回答データの受け取り
- スコア計算ロジック
- スプレッドシートへの保存

**検証**: 回答保存とスコア計算確認

#### Step 3.6: 結果取得API (/api/result)
- セッションIDから結果取得
- 成熟度レベル判定
- カテゴリ別スコア集計

**検証**: 結果データの取得確認

#### Git操作:
```bash
git checkout -b feature/phase3-gas-api
# 各APIごとにコミット
git add backend/
git commit -m "feat: Setup GAS base API with CORS"
git commit -m "feat: Implement config API endpoint"
git commit -m "feat: Implement questions API endpoint"
git commit -m "feat: Implement register API endpoint"
git commit -m "feat: Implement answers API endpoint"
git commit -m "feat: Implement result API endpoint"
git checkout develop
git merge feature/phase3-gas-api
```

---

### Phase 4: フロントエンド・バックエンド連携
**期間**: Day 10-12
**ブランチ**: feature/phase4-integration

#### Step 4.1: API通信モジュール作成
- fetch関数のラッパー作成
- エラーハンドリング
- ローディング表示

**検証**: 通信モジュールの単体テスト

#### Step 4.2: P-01ページのAPI連携
- 設定情報の動的取得
- タイトル・説明文の表示

**検証**: 動的コンテンツ表示確認

#### Step 4.3: P-02ページのAPI連携
- プライバシーポリシーの動的取得

**検証**: ポリシー文の表示確認

#### Step 4.4: P-03ページのAPI連携
- フォーム送信処理
- セッションID保存（localStorage）

**検証**: 登録処理の動作確認

#### Step 4.5: P-04ページのAPI連携
- 設問の動的取得・表示
- 回答の一時保存
- 回答送信処理

**検証**: 診断フロー全体の動作確認

#### Step 4.6: P-05ページのAPI連携
- 結果データの取得
- レーダーチャート描画
- 推奨サービス表示

**検証**: 結果表示の動作確認

#### Git操作:
```bash
git checkout -b feature/phase4-integration
# 各連携ごとにコミット
git add frontend/js/
git commit -m "feat: Create API communication module"
git commit -m "feat: Connect P-01 with config API"
git commit -m "feat: Connect P-02 with privacy policy API"
git commit -m "feat: Connect P-03 with register API"
git commit -m "feat: Connect P-04 with questions/answers API"
git commit -m "feat: Connect P-05 with result API"
git checkout develop
git merge feature/phase4-integration
```

---

### Phase 5: 結果表示機能の高度化
**期間**: Day 13-14
**ブランチ**: feature/phase5-visualization

#### Step 5.1: レーダーチャート実装
- Chart.js設定の最適化
- カテゴリ別スコア表示
- アニメーション追加

**検証**: チャート表示・アニメーション確認

#### Step 5.2: 成熟度レベル表示
- ビジュアル表現の実装
- 段階表示（4段階）
- 現在位置のハイライト

**検証**: レベル表示の確認

#### Step 5.3: サービスカード実装
- カードレイアウト
- レスポンシブ対応
- ホバーエフェクト

**検証**: カード表示・インタラクション確認

#### Git操作:
```bash
git checkout -b feature/phase5-visualization
git add frontend/
git commit -m "feat: Enhance radar chart visualization"
git commit -m "feat: Add maturity level visual display"
git commit -m "feat: Implement service recommendation cards"
git checkout develop
git merge feature/phase5-visualization
```

---

### Phase 6: 最終調整・品質向上
**期間**: Day 15-16
**ブランチ**: feature/phase6-polish

#### Step 6.1: エラーハンドリング強化
- ネットワークエラー対応
- タイムアウト処理
- ユーザーフレンドリーなエラーメッセージ

**検証**: 各種エラーケースのテスト

#### Step 6.2: パフォーマンス最適化
- JavaScript圧縮
- CSS最適化
- 画像最適化

**検証**: PageSpeed Insightsでの測定

#### Step 6.3: クロスブラウザテスト
- Chrome/Safari/Firefox/Edge確認
- モバイルブラウザ確認
- 表示崩れの修正

**検証**: 各ブラウザでの動作確認

#### Step 6.4: アクセシビリティ改善
- alt属性追加
- キーボード操作対応
- スクリーンリーダー対応

**検証**: アクセシビリティチェック

#### Git操作:
```bash
git checkout -b feature/phase6-polish
git add .
git commit -m "feat: Enhance error handling"
git commit -m "perf: Optimize assets and performance"
git commit -m "fix: Cross-browser compatibility issues"
git commit -m "feat: Improve accessibility"
git checkout develop
git merge feature/phase6-polish
```

---

### Phase 7: テスト・デプロイ準備
**期間**: Day 17-18
**ブランチ**: develop → main

#### Step 7.1: 統合テスト
- エンドツーエンドテスト
- 負荷テスト（同時アクセス）
- データ整合性確認

#### Step 7.2: ドキュメント整備
- README.md作成
- デプロイ手順書
- 運用マニュアル

#### Step 7.3: 本番環境準備
- GAS本番版公開設定
- GitHub Pages設定（またはホスティング準備）
- ドメイン設定（必要に応じて）

#### Git操作:
```bash
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

## 3. リスク管理

### 3.1 想定リスクと対策

| リスク | 影響度 | 対策 |
|--------|--------|------|
| GAS実行時間制限 | 高 | バッチ処理の分割、非同期処理 |
| スプレッドシート同時編集 | 中 | ロック機構の実装 |
| CORS問題 | 中 | 適切なヘッダー設定、プロキシ利用 |
| ブラウザ互換性 | 低 | Polyfill使用、段階的機能提供 |

### 3.2 ロールバック戦略
- 各フェーズ完了時にタグ付け
- 問題発生時は前のタグまで戻す
- データベース（スプレッドシート）のバックアップ

## 4. 検証チェックリスト

### 各ステップ完了時の確認項目
- [ ] コードが正常に動作するか
- [ ] エラーハンドリングが適切か
- [ ] レスポンシブデザインが機能するか
- [ ] Gitにコミットされているか
- [ ] ドキュメントが更新されているか

### フェーズ完了時の確認項目
- [ ] 全機能が統合されて動作するか
- [ ] パフォーマンスは許容範囲か
- [ ] セキュリティ要件を満たすか
- [ ] ブランチがマージされているか
- [ ] タグが付けられているか

## 5. 開発環境セットアップ

### 必要なツール
1. **エディタ**: VS Code / Cursor
2. **Git**: コマンドラインまたはGUI
3. **ブラウザ**: Chrome（開発者ツール使用）
4. **Google アカウント**: GAS/スプレッドシート用
5. **Node.js**: ローカルサーバー用（オプション）

### 推奨VS Code拡張機能
- Live Server
- Prettier
- ESLint
- Google Apps Script

### ローカル開発サーバー（オプション）
```bash
# Python使用の場合
python -m http.server 8000

# Node.js使用の場合
npx http-server -p 8000
```

## 6. コミットメッセージ規約

### フォーマット
```
<type>: <subject>

<body>（オプション）
```

### Type
- **feat**: 新機能
- **fix**: バグ修正
- **docs**: ドキュメント変更
- **style**: コードスタイル変更
- **refactor**: リファクタリング
- **perf**: パフォーマンス改善
- **test**: テスト追加・修正
- **chore**: ビルドプロセスや補助ツールの変更

### 例
```
feat: Add user registration form validation

- Add email format validation
- Add required field checking
- Show error messages below input fields
```

## 7. 次のアクション

### 即座に実行すべきタスク
1. ✅ Git初期化完了
2. ✅ .gitignore作成完了
3. ✅ 開発計画書作成完了
4. ⏳ 初回コミット実行
5. ⏳ GitHub連携（オプション）

### 開発開始前の確認
- [ ] Google アカウントの準備
- [ ] 開発環境のセットアップ
- [ ] Spec.mdの最終確認
- [ ] チーム内での計画共有（該当する場合）

---

*この計画書は開発の進行に応じて更新される*
*最終更新: 2025-01-19*