const express = require('express');
const bodyParser = require('body-parser');
const BusinessExpense = require('./models/BusinessExpense');
const sequelize = require('./db');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .catch(err => console.error('Unable to connect to DB:', err));

app.post('/business-expenses', async (req, res) => {
  try {
    const expense = await BusinessExpense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/business-expenses', async (req, res) => {
  try {
    const expenses = await BusinessExpense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/business-expenses/:id', async (req, res) => {
  try {
    const expense = await BusinessExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/business-expenses/:id', async (req, res) => {
  try {
    const expense = await BusinessExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    await expense.update(req.body);
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/business-expenses/:id', async (req, res) => {
  try {
    const expense = await BusinessExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    await expense.destroy();
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

