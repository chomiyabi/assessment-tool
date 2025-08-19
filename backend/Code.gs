/**
 * 生成AI活用 業務効率化アセスメントツール - Google Apps Script
 * Phase 1 - 基本構造
 */

// スプレッドシートID（後で設定）
const SPREADSHEET_ID = '';

/**
 * Webアプリケーションのメインエントリーポイント (GET)
 */
function doGet(e) {
  try {
    const path = e.parameter.path || '';
    
    // CORS設定
    const output = ContentService
      .createTextOutput('Assessment Tool API is running')
      .setMimeType(ContentService.MimeType.TEXT);
    
    return output;
  } catch (error) {
    Logger.log('doGet Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Internal server error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Webアプリケーションのメインエントリーポイント (POST)
 */
function doPost(e) {
  try {
    // CORS設定
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    // POSTデータの解析
    let postData;
    try {
      postData = JSON.parse(e.postData.contents);
    } catch (parseError) {
      throw new Error('Invalid JSON format');
    }
    
    const action = postData.action || '';
    
    // アクション別処理（後で実装）
    let result;
    switch (action) {
      case 'getConfig':
        result = getConfig();
        break;
      case 'getQuestions':
        result = getQuestions();
        break;
      case 'register':
        result = registerUser(postData.data);
        break;
      case 'submitAnswers':
        result = submitAnswers(postData.data);
        break;
      case 'getResult':
        result = getResult(postData.sessionId);
        break;
      default:
        result = { error: 'Unknown action: ' + action };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('doPost Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Internal server error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 設定情報取得（Phase 2で実装予定）
 */
function getConfig() {
  return {
    message: 'Config endpoint - Phase 2で実装予定'
  };
}

/**
 * 設問取得（Phase 2で実装予定）
 */
function getQuestions() {
  return {
    message: 'Questions endpoint - Phase 2で実装予定'
  };
}

/**
 * ユーザー登録（Phase 2で実装予定）
 */
function registerUser(userData) {
  return {
    message: 'Register endpoint - Phase 2で実装予定'
  };
}

/**
 * 回答送信（Phase 2で実装予定）
 */
function submitAnswers(answersData) {
  return {
    message: 'Submit answers endpoint - Phase 2で実装予定'
  };
}

/**
 * 結果取得（Phase 2で実装予定）
 */
function getResult(sessionId) {
  return {
    message: 'Result endpoint - Phase 2で実装予定'
  };
}

/**
 * テスト用関数
 */
function testFunction() {
  Logger.log('Assessment Tool GAS - Phase 1 setup completed');
  return 'Test successful';
}