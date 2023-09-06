/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-var */

export function isFileArray(data: any[]): boolean {
  return Array.isArray(data) && data.every((value) => value instanceof File);
}


export function SetNavigateBackUrl(url:string) {
  sessionStorage.setItem("return_URL", url);
}

export function calculatedFileSizeInKB(sizeInMegaByte: number): number {

  const KBTMB : number = 1048576;

  return sizeInMegaByte * KBTMB;

}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function GenerateRandomPassword() : string {
var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@";
var pwdLen = 10;
var randPassword = new Array(pwdLen).fill(0).map(x => (function(chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while(r[0] > max); return chars[r[0] % chars.length]; })(pwdChars)).join('');


let password = Array(10)
.fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$")
.map(function(x) { return x[Math.floor(Math.random() * x.length)] })
.join('');

return password;
}
