import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'My firts website with Node!'})) //aqui le paso un dato de tipo objeto desde el backend al frontend

router.get('/about', (req, res) => res.render('about', {title: 'About me'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact page'}))

export default router