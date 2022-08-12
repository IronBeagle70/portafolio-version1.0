import { Router } from 'express';
const router=Router();

//GET
router.get('/',(req,res)=>res.render('index.ejs',{title:'Portafolio ver 1.0'}));

export default router;