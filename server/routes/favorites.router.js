const express = require('express');
const pool = require('../modules/pool');
const favoritesRouter = express.Router();

/**
 * GET route template
 */
favoritesRouter.get('/', (req, res) => {
    const query = `SELECT * FROM "contact_info" WHERE "user_id" = $1`;
    const values = req.user.id;

    pool.query(query, [values])
        .then( result => {
        res.send(result.rows[0]);
        })
        .catch(err => {
        console.log('ERROR: GET Contact Info', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
// favoritesRouter.post('/', (req, res) => {
//   // POST route code here
//   {req.body.menuItemArray.map((item) =>  {  
//     const sqlFavoriteText = `
//   INSERT INTO "favorites" ("user_id", "order_id", "menu_id", "quantity")
//   VALUES ($1, $2, $3, $4);`

//   const sqlFavoriteValues = [
//     req.user.id, 
//     , 
//     item.menu_id, 
//     item.quantity
//   ]

//   pool.query(sqlFavoriteText, sqlFavoriteValues)
//   console.log('POSTed to favorites');
// })}})
// .then(result => {
//     console.log('Favorites Added:', result);
// }).catch(err => {
//     console.log(err);
//     res.sendStatus(500)
//   });

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