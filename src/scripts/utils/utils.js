export function setValidityInput(element) {
  element.addEventListener('invalid', () => {
    if (element.validity.valueMissing) {
      element.setCustomValidity('This field is required');
    } else {
      // Wajib dikosongkan jika validasi ini sudah lolos
      element.setCustomValidity('');
    }

    if (element.validity.patternMismatch) {
      element.setCustomValidity('The value type must be number');
    } else {
      // Wajib dikosongkan jika validasi ini sudah lolos
      element.setCustomValidity('');
    }
  });
}

export function convertStringToNumber(value) {
  if (typeof value !== 'string') {
    throw new Error('Parameter `value` bukan bertipe string');
  }

  return Number(value);
}

export function setInputElementsToEmpty(element) {
  element.value = '';
}
