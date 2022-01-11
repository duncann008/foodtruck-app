const express = require('express');
const pool = require('../modules/pool');
const ordersRouter = express.Router();

/**
 * GET route template
 */
const setQuery = (paramRole, paramId) =>  {
 if (paramRole === 'admin')  {
  return `
   SELECT * FROM "orders"
   JOIN "order_item"
   ON "orders"."id"="order_item"."order_id"
   JOIN "menu"
   ON "order_item"."menu_id"="menu"."id"
     WHERE "fulfilled" = false`;
 }
 else  {
   return `
   SELECT * FROM "orders"
   JOIN "order_item"
   ON "orders"."id"="order_item"."order_id"
   JOIN "menu"
   ON "order_item"."menu_id"="menu"."id"
     WHERE "fulfilled" = false AND "user_id" = ${paramId}`;
 }
}


ordersRouter.get('/', (req, res) => {
  const query = setQuery(req.user.role, req.user.id);
   pool.query(query)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: GET ordersList', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
 ordersRouter.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "orders" ("user_id", "time_of_order", "notes", "total_price")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`

  const sqlValues = [
      req.user.id,
      req.body.time_of_order, 
      req.body.notes, 
      req.body.total_price 
  ]

  pool.query(sqlText, sqlValues)
  .then(result => {
    console.log(req.body.menuItemArray)
    {req.body.menuItemArray.map((item) =>  {  
      const sqlText = `
    INSERT INTO "order_item" ("order_id", "menu_id", "quantity")
    VALUES ($1, $2, $3)
    RETURNING "id";`

    const sqlValues = [
        result.rows[0].id,
        item.menu_id, 
        item.quantity
    ]

    pool.query(sqlText, sqlValues)
    console.log('Both POSTS hit');
})}
  
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

module.exports = ordersRouter;