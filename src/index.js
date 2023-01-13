// Librerias y dependencias
import express from 'express'
import ejs from 'ejs'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'


// Configuracion de la app
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views',join(__dirname,'views'))
app.set('view engine', 'ejs')



app.listen(4000, () => {
    console.log('Server is running on port 4000')
    }
)


app.get('/', (req, res) => {
    res.render('index')
})