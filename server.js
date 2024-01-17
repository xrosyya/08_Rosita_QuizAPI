const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRouter = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJS API b Peika');
})

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRouter)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));