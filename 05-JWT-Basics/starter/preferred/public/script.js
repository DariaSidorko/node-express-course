
let token = '';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/api/v1/logon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    token = data.token;
    document.getElementById('response').innerText = 'Logged in. Token received.';
  } catch (err) {
    document.getElementById('response').innerText = 'Login failed.';
  }
});

document.getElementById('get-data').addEventListener('click', async () => {
  if (!token) {
    document.getElementById('response').innerText = 'Please log in first.';
    return;
  }

  try {
    const res = await fetch('/api/v1/hello', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    document.getElementById('response').innerText = data.msg || JSON.stringify(data);
  } catch (err) {
    document.getElementById('response').innerText = 'Access denied or error.';
  }
});
