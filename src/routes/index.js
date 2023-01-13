import { Router } from 'express'
const router = Router()

// Rutas
router.get('/', (req, res) => res.render('index'))
router.get('/login', (req, res) => res.render('login'))
router.get('/registro', (req, res) => res.render('registro'))
router.get('/dashboard', (req, res) => res.render('dashboard'))
router.get('/pedir/seleccion_zona', (req, res) => res.render('seleccion_zona'))
router.get('/profile', (req, res) => {
    // Dumbp data
    req.user = {
        "nombre": "Arturito", 
        "email": "admin@pruebas",
        "telefono": "123456789",
        "direccion": "Calle falsa 123",
        "tipo": "Estudiante",
        "viajes":{
            "solicitados":0,
            "realizados":0
        }
    };
    res.render('perfil', { user: req.user }
    )
})

export default router