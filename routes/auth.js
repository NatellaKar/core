const express = require('express');
const router = express.Router();

// POST /auth/register
// сервер, создай правило, по которому ты будешь получать
// запрос пользователя с методом POST на /auth/register
// пользователь в request даст логин и пароль и сохрани в БД
// и отправлять ответ пользователю с методом JSON
// и статусом 501 и сообщением 'Not implemented'
router.post('/register', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// POST /auth/login
router.get('/login', (req, res) => {
  const { login, password } = req.query;
  // GET /api/auth/login?login=user&password=secret
  res.status(501).json({ message: 'Not implemented', login, password: password ? '***' : undefined });
});

// POST /auth/logout
router.post('/logout', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// GET /auth/me — текущий пользователь
router.get('/me', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;