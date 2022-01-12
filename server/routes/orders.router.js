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
     WHERE "user_id" = ${paramId}
     ORDER BY "order_item"."order_id" DESC
     LIMIT 5;`
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
    let newOrderId = result.rows[0].id;
    if (req.body.favorited === true) {
    {req.body.menuItemArray.map((item) =>  {  
      const sqlText = `
    INSERT INTO "order_item" ("order_id", "menu_id", "quantity")
    VALUES ($1, $2, $3)
    RETURNING "id";`

    const sqlValues = [
        newOrderId,
        item.menu_id, 
        item.quantity
    ]

    pool.query(sqlText, sqlValues)

    const sqlFavoriteText = `
  INSERT INTO "favorites" ("user_id", "order_id", "menu_id", "quantity")
  VALUES ($1, $2, $3, $4);`

  const sqlFavoriteValues = [
    req.user.id, 
    newOrderId,
    item.menu_id, 
    item.quantity
  ]
  
  pool.query(sqlFavoriteText, sqlFavoriteValues)
  .then(result => {
    console.log('POST success?')
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500)
  });
    
})}}

else  {
  
    {req.body.menuItemArray.map((item) =>  {  
      const sqlText = `
    INSERT INTO "order_item" ("order_id", "menu_id", "quantity")
    VALUES ($1, $2, $3)
    RETURNING "id";`

    const sqlValues = [
        newOrderId,
        item.menu_id, 
        item.quantity
    ]

    pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('POST success?')
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    });
})}
  }
})})



ordersRouter.put('/:id', (req, res) => {
  
  
  const query = `
  
  UPDATE "orders"
	SET "fulfilled" = true
		WHERE "id" = $1;`
  const value = [req.params.id];

   pool.query(query, value)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Orders PUT', err);
        res.sendStatus(500)
        })

});

module.exports = ordersRouter;