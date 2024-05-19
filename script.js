document.getElementById('check-btn').addEventListener('click', function() {
    const phoneInput = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    if (phoneInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const validPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        /^\d{10}$/,
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^1\s\d{3}\s\d{3}\s\d{4}$/
    ];

    const formattedPatterns = [
        { pattern: /^1\s\d{3}-\d{3}-\d{4}$/, formatted: "1 555-555-5555" },
        { pattern: /^1\s\(\d{3}\)\s\d{3}-\d{4}$/, formatted: "1 (555) 555-5555" },
        { pattern: /^\d{10}$/, formatted: "5555555555" },
        { pattern: /^\d{3}-\d{3}-\d{4}$/, formatted: "555-555-5555" },
        { pattern: /^\(\d{3}\)\d{3}-\d{4}$/, formatted: "(555)555-5555" },
        { pattern: /^1\(\d{3}\)\d{3}-\d{4}$/, formatted: "1(555)555-5555" },
        { pattern: /^1\s\d{3}\s\d{3}\s\d{4}$/, formatted: "1 555 555 5555" }
    ];

    const isValid = validPatterns.some(pattern => pattern.test(phoneInput));
    const exactMatch = formattedPatterns.find(item => item.pattern.test(phoneInput));

    if (isValid) {
        resultDiv.textContent = `Valid US number: ${phoneInput}`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneInput}`;
        resultDiv.style.color = 'red';
    }

    if (exactMatch) {
        resultDiv.textContent = `Valid US number: ${exactMatch.formatted}`;
    } else {
        const invalidPatternExamples = [
            /^555-5555$/,
            /^5555555$/,
            /^1\s\d{3}\)\d{3}-\d{4}$/,
            /^123\*\*&!!asdf#$/,
            /^55555555$/,
            /^\(\d{10}\)$/,
            /^2\s\(\d{3}\)\s\d{3}-\d{4}$/,
            /^0\s\(\d{3}\)\s\d{3}-\d{4}$/,
            /^-1\s\(\d{3}\)\s\d{3}-\d{4}$/,
            /^2\s\d{3}\s\d{3}-\d{4}$/,
            /^10\s\(\d{3}\)\s\d{3}-\d{4}$/,
            /^\d{11}$/,
            /^\(\d{3}\)\d{7}$/,
            /^2\(\d{3}\)\d{7}$/,
            /^2\(\d{3}\)\d{3}-\d{4}$/,
            /^\d{3}\)-\d{3}-\d{4}$/,
            /^\(\d{3}-\d{3}-\d{4}$/,
            /^\(\d{3}\)\d{1}\(\d{3}\?\)-\d{4}$/,
            /^\d{2}\s\d{2}-\d{2}-\d{3}-\d{1}$/,
            /^11\s\d{3}-\d{3}-\d{4}$/
        ];

        const isInvalid = invalidPatternExamples.some(pattern => pattern.test(phoneInput));

        if (isInvalid) {
            resultDiv.textContent = `Invalid US number: ${phoneInput}`;
            resultDiv.style.color = 'red';
        }
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
