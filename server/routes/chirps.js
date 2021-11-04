const express = require('express');
const chirpsStore = require('../chirpstore')
let router = express.Router()

router.get('/', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    }else {
        res.send(chirpsStore.GetChirps())
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});
router.put('/', (req, res) =>{
    res.json(chirpsStore.UpdateChirp(req.body))
    res.sendStatus(200);
});
router.delete('/', (req, res) => {
    res.json(chirpsStore.DeleteChirp(req.body))
    
    res.sendStatus(200);
});

module.exports = router;