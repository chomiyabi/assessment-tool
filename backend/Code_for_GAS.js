/**
 * 生成AI活用 業務効率化アセスメントツール - Google Apps Script
 * Phase 1 - 基本構造とテスト実装
 */

// スプレッドシートID
const SPREADSHEET_ID = '1tDDgfZGH4W9YyOAKCVSZyRu2CtHa7UYJ9bsIh5UZvdk';

/**
 * Webアプリケーションのメインエントリーポイント (GET)
 */
function doGet(e) {
  try {
    const path = e.parameter.path || '';
    
    // テスト用レスポンス
    const response = {
      status: 'success',
      message: 'Assessment Tool API is running',
      timestamp: new Date().toISOString(),
      spreadsheetId: SPREADSHEET_ID,
      path: path
    };
    
    // CORS対応のレスポンス
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('doGet Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
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
    // POSTデータの解析
    let postData;
    try {
      postData = JSON.parse(e.postData.contents);
    } catch (parseError) {
      throw new Error('Invalid JSON format');
    }
    
    const action = postData.action || '';
    
    // アクション別処理
    let result;
    switch (action) {
      case 'test':
        result = testConnection();
        break;
      case 'getConfig':
        result = getConfig();
        break;
      case 'getQuestions':
        result = getQuestions();
        break;
      default:
        result = { 
          status: 'error',
          error: 'Unknown action: ' + action 
        };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('doPost Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        error: 'Internal server error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * スプレッドシート接続テスト
 */
function testConnection() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheets = spreadsheet.getSheets();
    
    return {
      status: 'success',
      message: 'Spreadsheet connection successful',
      spreadsheetName: spreadsheet.getName(),
      sheets: sheets.map(sheet => sheet.getName())
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to connect to spreadsheet',
      error: error.toString()
    };
  }
}

/**
 * 設定情報取得（簡易実装）
 */
function getConfig() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const configSheet = spreadsheet.getSheetByName('Config');
    
    if (!configSheet) {
      throw new Error('Config sheet not found');
    }
    
    const data = configSheet.getDataRange().getValues();
    const config = {};
    
    // key-value形式でデータを取得
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] && data[i][1]) {
        config[data[i][0]] = data[i][1];
      }
    }
    
    return {
      status: 'success',
      data: config
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to get config',
      error: error.toString()
    };
  }
}

/**
 * 設問取得（簡易実装）
 */
function getQuestions() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const questionsSheet = spreadsheet.getSheetByName('Questions');
    
    if (!questionsSheet) {
      throw new Error('Questions sheet not found');
    }
    
    const data = questionsSheet.getDataRange().getValues();
    const headers = data[0];
    const questions = [];
    
    // ヘッダー行を除いてデータを処理
    for (let i = 1; i < data.length; i++) {
      if (data[i][0]) { // question_idが存在する行のみ処理
        const question = {
          question_id: data[i][0],
          category: data[i][1],
          question_text: data[i][2],
          options: []
        };
        
        // オプションを処理（4つまで）
        for (let j = 0; j < 4; j++) {
          const optionIndex = 3 + (j * 2);
          const scoreIndex = 4 + (j * 2);
          
          if (data[i][optionIndex]) {
            question.options.push({
              text: data[i][optionIndex],
              score: data[i][scoreIndex]
            });
          }
        }
        
        questions.push(question);
      }
    }
    
    return {
      status: 'success',
      data: questions
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to get questions',
      error: error.toString()
    };
  }
}

/**
 * テスト用関数（スクリプトエディタから実行）
 */
function testFunction() {
  Logger.log('=== Test Start ===');
  
  // スプレッドシート接続テスト
  const connectionResult = testConnection();
  Logger.log('Connection Test: ' + JSON.stringify(connectionResult));
  
  // 設定取得テスト
  const configResult = getConfig();
  Logger.log('Config Test: ' + JSON.stringify(configResult));
  
  // 質問取得テスト
  const questionsResult = getQuestions();
  Logger.log('Questions Test: ' + JSON.stringify(questionsResult));
  
  Logger.log('=== Test Complete ===');
  return 'Test completed. Check logs for details.';
}