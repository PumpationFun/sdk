const router = require("express").Router();

let projects = [];

router.post("/project", (req,res)=>{

    const project = {
        title:req.body.title,
        creator:req.body.creator
    }

    projects.push(project);

    res.send(project);

});

router.get("/projects",(req,res)=>{

    res.send(projects);

});

module.exports = router;
