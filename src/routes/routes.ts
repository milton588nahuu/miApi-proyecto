import { Router } from "express"
import { 
          postCustomers,
          getCustomers,
          delecteCustomers,
          getIdCustomers,
          putCustomers  
        } from '../controllers/controladores'
import { requiredScopes } from "express-oauth2-jwt-bearer";



const router = Router()

router.get("/",requiredScopes("read:customers"),getCustomers);
router.get("/:id",requiredScopes("read:customers"),getIdCustomers);
router.put("/:id",requiredScopes("write:customers"),putCustomers);
router.delete("/:id",requiredScopes("write:customers"),delecteCustomers);
router.post("/",requiredScopes("write:customers"),postCustomers);
export { router };