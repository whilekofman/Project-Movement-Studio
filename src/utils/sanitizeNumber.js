const sanitizeNumber = (number) => {
    const value = number.replace(/\D/g, ''); // Remove non-digit characters
    let formattedNumber = '';

    for (let i = 0; i < value.length; i++) {
        if (i === 3 || i === 6) {
            formattedNumber += '-';
        }
        formattedNumber += value[i];
    }

    return formattedNumber;
};

export default sanitizeNumber;