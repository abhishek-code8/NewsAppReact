async function readNowService(token ){
    let data ={
        token : token
    }
let url="http://localhost:3001/auth/v1/isAuthenticated";
const response = await fetch(url,{
    method:'POST',
    mode:'cors',
    cache:'no-cache',
    credentials:'same-origin',
    headers:{
        'content-Type':'application/json',
        'Authorization': token
    },
    body: JSON.stringify(data)
})
return await response.json();
}


module.exports =readNowService;