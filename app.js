async function createProject(){

const title=document.getElementById("title").value;
const creator=document.getElementById("creator").value;

await fetch("/api/project",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
creator
})

});

loadProjects();

}

async function loadProjects(){

const res=await fetch("/api/projects");

const data=await res.json();

let html="";

data.forEach(p=>{

html+=`
<div>
${p.title} - ${p.creator}
</div>
`;

});

document.getElementById("list").innerHTML=html;

}

loadProjects();
