const express = require('express');
const pool = require('../modules/pool');
const favoritesRouter = express.Router();

/**
 * GET route template
 */
favoritesRouter.get('/', (req, res) => {
    const query = `
    SELECT "menu"."item", "favorites"."menu_id", "menu"."price", "favorites"."quantity", "favorites"."order_id" FROM "favorites"
    JOIN "menu"
    ON "favorites"."menu_id" = "menu"."id"
     WHERE "user_id" = $1`;
    const values = req.user.id;

    pool.query(query, [values])
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: GET Favorites', err);
        res.sendStatus(500)
        })

});


favoritesRouter.delete('/:order_id', (req, res) => {
  console.log(req.params)
  const sqlText = `
    DELETE FROM "favorites"
      WHERE "order_id" = $1;
    `

    const sqlValues = [
      req.params.order_id
    ];

    pool.query(sqlText, sqlValues)
  .then(res => {
    console.log('Delete happened')
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});



module.exports = favoritesRouter;