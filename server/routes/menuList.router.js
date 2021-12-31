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
});

module.exports = menuRouter;