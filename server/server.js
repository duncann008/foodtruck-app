const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const menuRouter = require('./routes/menuList.router');
const menuItemRouter = require('./routes/menuItem.router');
const contactInfoRouter = require('./routes/contactInfo.router');
const aboutRouter = require('./routes/aboutContact.router');
const ordersRouter = require('./routes/orders.router');
const confirmationRouter = require('./routes/confirmation.router');
const favoritesRouter = require('./routes/favorites.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/menuList', menuRouter);
app.use('/menuItem', menuItemRouter);
app.use('/contactInfo', contactInfoRouter);
app.use('/aboutContact', aboutRouter);
app.use('/orders', ordersRouter);
app.use('/confirmation', confirmationRouter);
app.use('/favorites', favoritesRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
