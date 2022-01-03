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
        console.log('It worked?');  
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

module.exports = menuItemRouter;