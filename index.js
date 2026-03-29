const express = require('express'); //импортируем express как import в python
const app = express(); //создаем экземпляр сервера express
const port = 3000; //порт на котором будет работать сервер
const routes = require('./routes/index');
app.use('/api', routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});