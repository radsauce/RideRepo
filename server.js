const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

const PORT = process.env.PORT || 6969
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))