const base_url = "http://localhost:3000/"
//all users
export const getUsers = async ()=>{
     const response = fetch(`${base_url}/api/users`)
    /* const json = await response.json()


     return json;*/
     
}
//single user

export const getUser = async(userId) =>{
      const response = await fetch(`${base_url}api/user/${userId} `);
      const json = await response.json()
      if(json) return json;
      return {

      }

}

//posting a new user
export async function addUser(formData){
     try{
          const Options ={
             method :'POST',
             Headers :{'Content-Type' : "appliaction/json"},
             body :JSON.stringify(formData)
          }

          const response = await fetch(`${base_url}api/users` , Options)
           const json = await response.json()

          return json;



     }catch(error){
          return error;

     }
}


//update a new user 
export async function updateUser(userId , formdata){

     const Options={
          method :'PUT',
          Headers :{'Content-Type' : "appliaction/json"},
          body :JSON.stringify(formData)
     }

          const response = await fetch(`${base_url}api/users${userId}`, Options)
         /* const json = await response.json()
            

          return json;*/

}

//Delete a user
export async function deleteUser(userId){

     
     const Options={
          method :'DELETE',
          Headers :{'Content-Type' : "appliaction/json"},
     }

          const response = await fetch(`${base_url}api/users${userId}`, Options)
          const json = await response.json()
            

          return json;

}