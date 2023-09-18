export function padNumber(number: number | string, length: number): string {
  return String(number).padStart(length, '0');
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
