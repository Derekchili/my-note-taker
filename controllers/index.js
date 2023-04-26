const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(_dirname, '../public/index.html'))
})

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = router;