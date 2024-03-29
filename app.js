const express = require('express');
const path = require('path');
const livereload = require('easy-livereload');
const app = express()
const port = 3000
app.use(express.static('./app/'));
app.use(livereload({
    watchDirs: [
        path.join(__dirname, 'app')
      ],
}))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))