export function wrapText(title : string, rowLength: number, maxRows: number) {
  let title_rows = [];
  let words = title.split(/(?<=[^a-zA-Z0-9()<>""''])/);
  let _row = "";
  words.forEach((wrd) => {
    if (_row.length + wrd.length >= rowLength) {
      title_rows.push(_row);
      _row = "";
    }
    _row += wrd;
  });
  if (_row) {
    title_rows.push(_row);
  }

  // Limit rows...
  if (title_rows.length > maxRows) {
    title_rows.length = maxRows;
    title_rows[maxRows - 1] += "…";
  }

  return title_rows;
}
