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
    const sqlText = `
    INSERT INTO "default_ingredients" ("Shell", "Meat", "Beans", "Cheese", "Rice", "Lettuce", "Salsa", "SourCream", "PicodeGallo", "Cilantro", "DicedOnions", "Sauce", "Corn", "Lime", "menu_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING "id";`
  
    const sqlValues = [
        req.body.Shell, 
        req.body.Meat, 
        req.body.Beans, 
        req.body.Cheese, 
        req.body.Rice, 
        req.body.Lettuce, 
        req.body.Salsa, 
        req.body.SourCream, 
        req.body.PicodeGallo, 
        req.body.Cilantro, 
        req.body.DicedOnions, 
        req.body.Sauce,
        req.body.Corn,
        req.body.Lime
    ]
  
    pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('Contact Info Added:', result.rows[0].id);
  }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  });

menuItemRouter.put('/', (req, res) => {

  const sqlText = `
  UPDATE "menu"
    SET "item" = $2,
        "image_url" = $3, 
        "price" = $4, 
        "description" = $5 
      WHERE "id" = $1;
  `

  const sqlValues = [
    req.body.id,
    req.body.item,
    req.body.image_url, 
    req.body.price, 
    req.body.description 
];

  pool.query(sqlText, sqlValues)
  .then(res => {
    console.log('MENU PUT happened')
    
    const sqlText = `
      UPDATE "default_ingredients"
        SET "Shell" = $2,
            "Meat" = $3, 
            "Beans" = $4, 
            "Cheese" = $5, 
            "Rice" = $6, 
            "Lettuce" = $7, 
            "Salsa" = $8, 
            "SourCream" = $9, 
            "PicodeGallo" = $10, 
            "Cilantro" = $11, 
            "DicedOnions" = $12, 
            "Sauce" = $13, 
            "Corn" = $14, 
            "Lime" = $15
          WHERE "id" = $1;
      `
  
      const sqlValues = [
        req.body.id,
        req.body.Shell,
        req.body.Meat, 
        req.body.Beans, 
        req.body.Cheese, 
        req.body.Rice, 
        req.body.Lettuce, 
        req.body.Salsa, 
        req.body.SourCream, 
        req.body.PicodeGallo, 
        req.body.Cilantro, 
        req.body.DicedOnions, 
        req.body.Sauce,
        req.body.Corn,
        req.body.Lime
    ];
  
      pool.query(sqlText, sqlValues)
    .then(result => {
      console.log('Ingredients PUT working.')
    })
    
  }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  });


module.exports = menuItemRouter;