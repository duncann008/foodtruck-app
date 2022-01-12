const express = require('express');
const pool = require('../modules/pool');
const favoritesRouter = express.Router();

/**
 * GET route template
 */
favoritesRouter.get('/', (req, res) => {
    const query = `
    SELECT "menu"."item", "favorites"."menu_id", "menu"."price", "favorites"."quantity" FROM "favorites"
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


favoritesRouter.delete('/', (req, res) => {

  const sqlText = `
    DELETE "contact_info"
      SET "first_name" = $2, "last_name" = $3, "phone_number" = $4, "email" = $5
        WHERE "user_id" = $1;
    `

    const sqlValues = [req.body.user_id, req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email];

    pool.query(sqlText, sqlValues)
  .then(res => {
    console.log('Delete happened')
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});



module.exports = favoritesRouter;