export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('380')) {
    return `+${digits}`;
  } else if (digits.startsWith('0')) {
    return `+38${digits}`;
  } else if (digits.startsWith('95') || digits.length === 9) {
    return `+380${digits}`;
  } else {
    return phone;
  }
}
