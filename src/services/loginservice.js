async function loginService(username, password){
    let data={
        'username':username,
        'password':password
    }
    let url="http://localhost:3001/auth/v1";
    const response = await fetch(url,{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export default loginService;