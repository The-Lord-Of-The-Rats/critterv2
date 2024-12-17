document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    document.getElementById('output').textContent = `You entered: ${userInput}`;
});
