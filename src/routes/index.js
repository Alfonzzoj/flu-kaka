import { Router } from 'express'
const router = Router()

// Rutas
router.get('/', (req, res) => res.render('index'))
router.get('/login', (req, res) => res.render('login'))
router.get('/registro', (req, res) => res.render('registro'))
router.get('/dashboard', (req, res) => res.render('dashboard'))
router.get('/pedir/seleccion_zona', (req, res) => res.render('pedir_seleccion_zona'))
router.get('/pedir/seleccion_zona/colas_en_zona', (req, res) => res.render('pedir_colas_en_zona'))
router.get('/dar/seleccion_zona', (req, res) => res.render('dar_seleccion_zona'))
router.get('/dar/gestion_de_encuentro', (req, res) => res.render('gestion_de_encuentro'))
router.get('/dar/solicitudes_para_viaje', (req, res) => res.render('solicitudes_para_viaje'))
// router.get('/dar/seleccion_zona/colas_en_zona', (req, res) => res.render('dar_colas_en_zona'))
router.get('/dar_review_a_conductor', (req, res) => res.render('dar_review_a_conductor'))
router.get('/en_viaje', (req, res) => res.render('en_viaje'))
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