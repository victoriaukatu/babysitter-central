const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {   
    // SQL query
    const query = `
        INSERT INTO kids_information (firstname, age, picture, gender, allergies, nap, pottytrained, notes, parentname, phone, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
pool.query(query, [req.body.firstname, req.body.age, req.body.picture, req.body.allergies, req.body.nap, req.body.pottytrained,
    req.body.notes, req.body.parentname, req.body.phone, req.body.phone, req.user.id])
.then((response) => {
    console.log('POST new child information', response);
    res.sendStatus(200);
})
.catch((error) => {
    console.log('new child POST error', error);
    res.sendStatus(500);
});
})






module.exports = router;