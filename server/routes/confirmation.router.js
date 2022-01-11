const express = require('express');
const pool = require('../modules/pool');
const confirmationRouter = express.Router();

/**
 * GET route template
 */
confirmationRouter.get('/', (req, res) => {
  
  const query = `
  SELECT "notes", "time_of_order", "order_item"."order_id" FROM "orders"
  JOIN "order_item"
  ON "orders"."id"="order_item"."order_id"
  JOIN "menu"
  ON "order_item"."menu_id"="menu"."id"
    WHERE user_id = 2
    ORDER BY "order_item"."order_id" DESC
    LIMIT 1;
  `;
    pool.query(query)
        .then( result => {
        res.send(result.rows[0]);
        })
        .catch(err => {
        console.log('ERROR: GET ordersList', err);
        res.sendStatus(500)
        })
  
  });

/**
 * POST route template
 */
confirmationRouter.post('/', (req, res) => {
  // POST route code here
});

module.exports = confirmationRouter;
