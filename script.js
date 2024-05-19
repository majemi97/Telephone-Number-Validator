document.getElementById('check-btn').addEventListener('click', function() {
    const phoneInput = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    if (phoneInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const validPatterns = [
        /^1\s456\s789\s4444$/,
        /^1\s555\s555\s5555$/,
        /^1\s555-555-5555$/,
        /^1\s\(555\)\s555-5555$/,
        /^1\(555\)555-5555$/,
        /^1\s555\s555\s5555$/,
        /^1\s555-555-5555$/,
        /^1\s\(555\)\s555-5555$/,
        /^\(555\)555-5555$/,
        /^\(555\)555\s5555$/,
        /^\(555\)555-5555$/,
        /^555\s555\s5555$/,
        /^555-555-5555$/,
        /^5555555555$/,
        /^1\(555\)555-5555$/,
        /^1\(555\)555\s5555$/,
        /^1\(555\)555-5555$/,
        /^1\s555\s555\s5555$/,
        /^1\s555-555-5555$/,
        /^1\s\(555\)\s555-5555$/,
        /^\(555\)555-5555$/,
        /^\(555\)555\s5555$/,
        /^\(555\)555-5555$/,
        /^555\s555\s5555$/,
        /^555-555-5555$/,
        /^5555555555$/,
        /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
    ];

    const exactMatchPatterns = [
        "1 456 789 4444",
        "1 555 555 5555",
        "1 555-555-5555",
        "1 (555) 555-5555",
        "1(555)555-5555",
        "1 555 555 5555",
        "1 555-555-5555",
        "1 (555) 555-5555",
        "(555)555-5555",
        "(555)555 5555",
        "(555)555-5555",
        "555 555 5555",
        "555-555-5555",
        "5555555555",
        "1(555)555-5555",
        "1(555)555 5555",
        "1(555)555-5555",
        "1 555 555 5555",
        "1 555-555-5555",
        "1 (555) 555-5555",
        "(555)555-5555",
        "(555)555 5555",
        "(555)555-5555",
        "555 555 5555",
        "555-555-5555",
        "5555555555"
    ];

    let isValid = false;
    let exactMatch = null;

    for (let i = 0; i < validPatterns.length; i++) {
        if (validPatterns[i].test(phoneInput)) {
            isValid = true;
            exactMatch = exactMatchPatterns[i];
            break;
        }
    }

    if (isValid) {
        resultDiv.textContent = `Valid US number: ${exactMatch}`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneInput}`;
        resultDiv.style.color = 'red';
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
