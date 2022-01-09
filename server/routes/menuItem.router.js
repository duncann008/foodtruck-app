const express = require('express');
const pool = require('../modules/pool');
const menuItemRouter = express.Router();

/**
 * GET route template
 */
menuItemRouter.get('/:id', (req, res) => {
    const query = `
        SELECT * FROM "menu" 
            JOIN "default_ingredients" 
                ON "menu"."id" = "default_ingredients"."menu_id" 
            WHERE "menu"."id" = $1;`

    const values = req.params.id;

    pool.query(query, [values])
        .then( result => {
        res.send(result.rows[0]);
          
        })
        .catch(err => {
        console.log('ERROR: GET menuItem', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
menuItemRouter.post('/', (req, res) => {
  // POST route code here
});

menuItemRouter.put('/', (req, res) => {
    
    const sqlText = `
      UPDATE "default_ingredients"
        SET "Shell" = $2
          WHERE "id" = $1;
      `
  
      const sqlValues = [req.body.id, req.body.Shell];
  
      pool.query(sqlText, sqlValues)
    .then(res => {
      console.log('PUT happened')
  }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  });


module.exports = menuItemRouter;