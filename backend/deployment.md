# Google Apps Script デプロイ情報

## プロジェクト情報
- **プロジェクト名**: 生成AI活用アセスメントツール_API
- **作成日**: 2025-01-19
- **Phase**: Phase 1 - Step 1.3

## デプロイ情報
- **デプロイID**: AKfycbwMW_aSrS9UyORlRdelYdQGJRBPSo2Zu8lLqQH_d-eYE-n8kCIAQ6yfiukogbtMLRe-
- **Webアプリ URL**: https://script.google.com/macros/s/AKfycbwMW_aSrS9UyORlRdelYdQGJRBPSo2Zu8lLqQH_d-eYE-n8kCIAQ6yfiukogbtMLRe-/exec
- **実行ユーザー**: 自分（Me）
- **アクセス権限**: 全員（Anyone）

## 連携スプレッドシート
- **スプレッドシートID**: 1tDDgfZGH4W9YyOAKCVSZyRu2CtHa7UYJ9bsIh5UZvdk
- **スプレッドシート名**: 生成AI活用アセスメントツール_データベース

## 利用可能なエンドポイント

### GET リクエスト
```
https://script.google.com/macros/s/AKfycbwMW_aSrS9UyORlRdelYdQGJRBPSo2Zu8lLqQH_d-eYE-n8kCIAQ6yfiukogbtMLRe-/exec
```

### POST リクエスト（アクション）
- `test`: 接続テスト
- `getConfig`: 設定情報取得
- `getQuestions`: 質問一覧取得

## テスト方法

### ブラウザでGETテスト
```
https://script.google.com/macros/s/AKfycbwMW_aSrS9UyORlRdelYdQGJRBPSo2Zu8lLqQH_d-eYE-n8kCIAQ6yfiukogbtMLRe-/exec
```

### curlでPOSTテスト
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"action":"test"}' \
  https://script.google.com/macros/s/AKfycbwMW_aSrS9UyORlRdelYdQGJRBPSo2Zu8lLqQH_d-eYE-n8kCIAQ6yfiukogbtMLRe-/exec
```

## 更新履歴
- 2025-01-19: 初回デプロイ（Phase 1）