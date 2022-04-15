var Costume = require('../models/costumes'); 
 
// List of all Costumes 
exports.costume_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume list'); 
}; 
 
// for a specific Costume. 
exports.costume_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Costume.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.costume_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 

// Handle Costume create on POST. 
exports.costume_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Costume(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.costume_type = req.body.costume_type; 
    document.costume_name = req.body.costume_name; 
    document.units = req.body.units; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume delete form on DELETE. 
exports.costume_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.costume_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Costume.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.costume_type)  
               toUpdate.costume_type = req.body.costume_type; 
        if(req.body.costume_name) toUpdate.costume_name = req.body.costume_name; 
        if(req.body.units) toUpdate.units = req.body.units; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// List of all Costumes 
exports.costume_list = async function(req, res) { 
    try{ 
        theCostumes = await Costume.find(); 
        res.send(theCostumes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.costume_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await Costume.find(); 
        res.render('costumes', { title: 'Costume Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 