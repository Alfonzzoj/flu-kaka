import { Router } from 'express'
const router = Router()

// Rutas
router.get('/', (req, res) => res.render('index'))
router.get('/login', (req, res) => res.render('login'))
export default router