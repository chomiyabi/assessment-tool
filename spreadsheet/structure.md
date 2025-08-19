# Google スプレッドシート構造定義

## 概要
このファイルは、Google スプレッドシートの構造を定義します。
Phase 1では構造のみを定義し、実際のスプレッドシート作成はStep 1.2で行います。

## スプレッドシート名
`生成AI活用アセスメントツール_データベース`

## シート構成

### 1. 設定シート (Config)
| A列 | B列 |
|-----|-----|
| key | value |
| site_title | 生成AI活用 業務効率化Web診断 |
| site_description | 本Web診断は会社のDXの推進度を、25問のアンケートを通じて行う簡易的なDX診断です。 |
| privacy_policy | [プライバシーポリシーの全文] |
| questions_per_page | 5 |

### 2. 設問マスタシート (Questions)
| A列 | B列 | C列 | D列 | E列 | F列 | G列 | H列 | I列 | J列 | K列 |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| question_id | category | question_text | option_1 | option_1_score | option_2 | option_2_score | option_3 | option_3_score | option_4 | option_4_score |
| Q001 | 経営 | 自社の経営戦略に合わせたDX戦略を策定されていますか？ | 策定していない。または周知されていない | 1 | 公開、周知されているが、一部の組織しか認知していない | 2 | 全組織に認知されており、一部の組織で取り組みが始めている | 3 | 全社員に認知されており、部門横断で取り組んでいる | 4 |

### 3. 回答データシート (Responses)
| A列 | B列 | C列 | D列 | E列 | F列 | G列 | H列 | I列 | J列〜 |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-------|
| timestamp | session_id | last_name | first_name | email | phone | company | industry | position | q001_answer, q001_score, ... |

### 4. 結果ロジックシート (ResultLogic)
| A列 | B列 | C列 | D列 | E列 | F列 |
|-----|-----|-----|-----|-----|-----|
| score_min | score_max | maturity_level | result_title | result_description | recommended_services |
| 0 | 25 | DX未着手企業 | DX推進はこれからのステージです | 貴社はDX推進において... | サービス1,サービス2 |
| 26 | 50 | DX検討企業 | DX推進を検討中のステージです | 貴社では一部でDXの取り組みが... | サービス2,サービス3 |
| 51 | 75 | DX推進企業 | DX推進が進んでいるステージです | 貴社では組織的にDXに取り組み... | サービス3,サービス4 |
| 76 | 100 | DX先進企業 | DX推進が先進的なステージです | 貴社は先進的なDX企業として... | サービス4,サービス5 |

## サンプルデータ
Phase 1では、以下の最小限のサンプルデータを作成：
- 設定: 基本的なサイト情報
- 設問: 3-5問程度
- 結果ロジック: 4段階の成熟度レベル

## 次のステップ
- Step 1.2でGoogleスプレッドシート作成
- Step 1.3でGoogle Apps Scriptとの連携テスト