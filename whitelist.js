const form = document.getElementById('whitelistForm');
const response = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    try {
        await fetch('https://play.niranjan0.xyz/api/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        });
        response.classList.remove('hidden');
    } catch(err) {
        alert('Error, something went mid');
    }
});
