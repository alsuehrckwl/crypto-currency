/**
 * @description 콤마 찍기
 * @export
 * @param {(string | number)} str
 */
export function makeComma(str: string | number) {
  let value = String(str);
  const regx = new RegExp(/(-?\d+)(\d{3})/);
  const bExists = value.indexOf('.', 0); 
  const strArr = value.split('.');

  while (regx.test(strArr[0])) {
    strArr[0] = strArr[0].replace(regx, '$1,$2'); 
  }

  if (bExists > -1) {
    value = strArr[0] + '.' + strArr[1];
  } else {
    value = strArr[0];
  }

  return value; 
}
