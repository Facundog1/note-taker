const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./noteMethods');

router.use('/api/notes', apiRoutes);

// url local host /notes takes user to notes.html
router.get('/notes', (req, res)=> {
    return res.sendFile(path.join(__dirname,'../public/notes.html'))
})

router.get('*', (req, res)=> {
    return res.sendFile(path.join(__dirname,'../public/index.html'))
})


module.exports = router;