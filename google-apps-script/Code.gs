/**
 * Google Apps Script — Lead Form Handler
 *
 * Deploy as Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Spreadsheet columns (row 1 headers):
 *   data_envio | timestamp | nome | email | telefone | nome_empresa | segmento | faturamento_mensal | ja_investiu_trafego
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};

    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    var now = new Date();
    var dataEnvio = data.data_envio || Utilities.formatDate(now, "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");
    var timestamp = data.timestamp || now.toISOString();

    sheet.appendRow([
      dataEnvio,
      timestamp,
      data.nome || "",
      data.email || "",
      data.telefone || "",
      data.nome_empresa || "",
      data.segmento || "",
      data.faturamento_mensal || "",
      data.ja_investiu_trafego || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, data_envio: dataEnvio }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
