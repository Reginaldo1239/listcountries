import fetch from 'cross-fetch';

export const get=(endPoint)=>{
    return new Promise((resolver,reject)=>{
        fetch(endPoint)
        .then((response)=>resolver({status:response.status,data:response.json()}))
        .catch((e)=>console.log(e));
       
    })
  
}