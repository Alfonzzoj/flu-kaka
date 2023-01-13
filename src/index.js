// Librerias y dependencias
import express from 'express'
import ejs from 'ejs'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes  from './routes/index.js'

// Configuracion de la app
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views',join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname,'public')))
// Rutas
app.use(indexRoutes)





// Iniciar el servidor
app.listen(4000, () => {
    console.log('Server is running on port 4000')
    }
)