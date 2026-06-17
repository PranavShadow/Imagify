const autocannon = require('autocannon');

autocannon({
  url: 'https://imagify-backend-1fsw.onrender.com/api/image/generate-image',
  connections: 2,
  duration: 30,
  timeout: 20,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token': 'PASTE_YOUR_TOKEN_HERE'
  },
  body: JSON.stringify({ prompt: 'a sunset over mountains' })
}, console.log);