async function getdata(token){
let url =  "http://localhost:3001/api/v1/news" ;
    const response = await fetch(url,{
        method:'GET',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'content-Type':'application/json',
            'Authorization': token
        }
    })
    return await response.json();
}

export default getdata;