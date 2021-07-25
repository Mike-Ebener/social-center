const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(mainRoutes)
//app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-center', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// app.use(require('./routes'));

// app.use(mainRoutes);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
