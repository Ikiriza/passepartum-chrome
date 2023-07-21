window.addEventListener('load', async function() {
    try {
        const items = await new Promise((resolve) => {
            chrome.storage.local.get('moodle_key', function(items) {
                resolve(items);
            });
        });

        if (items && items.moodle_key && document.getElementsByClassName('form-error').length === 0) {
            document.getElementById('username').value = items.moodle_key.username;
            document.getElementById('password').value = items.moodle_key.password;
            // Wait a short time (100ms) and then click the login button
            await new Promise((resolve) => setTimeout(resolve, 100));
            document.getElementById("btnLogin").click();
        } else {
            await main();
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
});

async function main() {
    // Your implementation of the main function goes here
    // Make sure to handle any async operations with proper await statements.
}
