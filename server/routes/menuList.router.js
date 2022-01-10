const express = require('express');
const pool = require('../modules/pool');
const menuRouter = express.Router();

/**
 * GET route template
 */
menuRouter.get('/', (req, res) => {
    const query = `SELECT * FROM menu`;
    pool.query(query)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: GET menuList', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
 menuRouter.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "menu" ("item", "image_url", "price", "description")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`

  const sqlValues = [
      req.body.item, 
      req.body.image_url, 
      req.body.price, 
      req.body.description
  ]

  pool.query(sqlText, sqlValues)
  .then(result => {
    console.log('Menu List increased');
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});



menuRouter.delete('/:id', (req, res) =>  {
  
  const sqlText = `
    DELETE FROM "menu"
      WHERE "id" = $1;
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});

module.exports = menuRouter;