const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
