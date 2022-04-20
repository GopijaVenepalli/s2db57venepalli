var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/costumes'); 

/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/costumes', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/costumes/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/resource/costumes/:id', 
costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/resource/costumes/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/costumes', costume_controller.costume_list); 

/* GET detail costume page */ 
router.get('/detail', costume_controller.costume_view_one_Page); 
 
/* GET create costume page */ 
router.get('/create', costume_controller.costume_create_Page); 
 
module.exports = router; 
