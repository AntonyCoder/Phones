export default function formatPhoneNumber(phone) {
    const digits = phone.replace(/\D/g, '');

    if (digits.length === 11 && digits[0] === '8') {
        return `+7${digits.slice(1)}`;
    }

    if (digits.length === 11 && digits[0] === '7') {
        return `+${digits}`;
    }

    if (phone.startsWith('+')) {
        return `+${digits}`;
    }

    return `+${digits}`
}