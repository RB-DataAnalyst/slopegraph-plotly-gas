/**
 * Adds a custom menu to the Google Sheets UI when the spreadsheet is opened.
 */
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Custom Menu')
    .addItem('Open Slope Graph', 'openSlopeGraphModal')
    .addToUi();
}

/**
 * Opens a modal dialog in the Google Sheets UI containing the slope graph.
 */
function openSlopeGraphModal() {
  const html = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setWidth(500)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Slope Graph Example');
}

/**
 * Includes the content of an HTML file in the modal dialog.
 *
 * @param {string} filename - The name of the HTML file to include.
 * @return {string} - The HTML content of the file.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Gets data from the specified range in the active sheet.
 *
 * @param {string} range - The range in A1 notation to fetch data from.
 * @return {Array} - A 2D array of the values in the specified range.
 */
function getSheetData(range) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = sheet.getRange(range);
  const data = dataRange.getValues();
  Logger.log(data);
  return data;
}

/**
 * Saves a chart image to the active sheet from a data URL.
 *
 * @param {string} dataUrl - The base64-encoded data URL of the image.
 * @param {number} [row=1] - The row number to insert the image (default is 1).
 * @param {number} [column=4] - The column number to insert the image (default is 4).
 * @param {boolean} [clearContent=false] - Whether to clear the cell content before inserting the image (default is false).
 */
function saveChartImage(dataUrl, row = 1, column = 4, clearContent = false) {
  try {
    // Log the received data URL
    Logger.log('Received data URL: ' + dataUrl);

    // Decode the base64 data
    const base64Data = dataUrl.split(',')[1];
    Logger.log('Base64 data length: ' + base64Data.length);

    const decodedData = Utilities.base64Decode(base64Data);
    const blob = Utilities.newBlob(decodedData, 'image/png', 'chart.png');
    Logger.log('Blob size: ' + blob.getBytes().length);

    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Clear cell content if specified
    if (clearContent) {
      sheet.getRange(row, column).setValue('');
    }

    // Insert the image at the specified cell
    const image = sheet.insertImage(blob, column, row);
    Logger.log('Image inserted at row ' + row + ', column ' + column);
  } catch (e) {
    Logger.log('Error inserting image: ' + e.message);
  }
}
