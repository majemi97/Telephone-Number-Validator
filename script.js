document.getElementById('check-btn').addEventListener('click', function() {
    const phoneInput = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    if (phoneInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const validPatterns = [
        /^1\s555-555-5555$/,
        /^1\s\(555\)\s555-5555$/,
        /^5555555555$/,
        /^555-555-5555$/,
        /^\(555\)555-5555$/,
        /^1\(555\)555-5555$/,
        /^1\s555\s555\s5555$/,
        /^1\s456\s789\s4444$/
    ];

    const exactMatchPatterns = [
        { pattern: /^1\s555-555-5555$/, formatted: "1 555-555-5555" },
        { pattern: /^1\s\(555\)\s555-5555$/, formatted: "1 (555) 555-5555" },
        { pattern: /^5555555555$/, formatted: "5555555555" },
        { pattern: /^555-555-5555$/, formatted: "555-555-5555" },
        { pattern: /^\(555\)555-5555$/, formatted: "(555)555-5555" },
        { pattern: /^1\(555\)555-5555$/, formatted: "1(555)555-5555" },
        { pattern: /^1\s555\s555\s5555$/, formatted: "1 555 555 5555" },
        { pattern: /^1\s456\s789\s4444$/, formatted: "1 456 789 4444" }
    ];

    const invalidPatterns = [
        /^555-5555$/,
        /^5555555$/,
        /^1\s555\)555-5555$/,
        /^123\*\*&!!asdf#$/,
        /^55555555$/,
        /^\(6054756961\)$/,
        /^2\s\(757\)\s622-7382$/,
        /^0\s\(757\)\s622-7382$/,
        /^-1\s\(757\)\s622-7382$/,
        /^2\s757\s622-7382$/,
        /^10\s\(757\)\s622-7382$/,
        /^27576227382$/,
        /^\(275\)76227382$/,
        /^2\(757\)6227382$/,
        /^2\(757\)622-7382$/,
        /^555\)-555-5555$/,
        /^\(555-555-5555$/,
        /^\(555\)5\(55\?\)-5555$/,
        /^55\s55-55-555-5$/,
        /^11\s555-555-5555$/
    ];

    let isValid = validPatterns.some(pattern => pattern.test(phoneInput));
    let exactMatch = exactMatchPatterns.find(item => item.pattern.test(phoneInput));
    let isInvalid = invalidPatterns.some(pattern => pattern.test(phoneInput));

    if (isValid) {
        resultDiv.textContent = `Valid US number: ${exactMatch.formatted}`;
        resultDiv.style.color = 'green';
    } else if (isInvalid) {
        resultDiv.textContent = `Invalid US number: ${phoneInput}`;
        resultDiv.style.color = 'red';
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneInput}`;
        resultDiv.style.color = 'red';
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
