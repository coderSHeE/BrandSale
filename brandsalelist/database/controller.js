import Users from'../model/user';

//get - http://localhost:3000/api/users

export async function getUsers(req ,res){
     try {

       const users = await Users.find({})

       if(!users)return res.status(404).json({error:"data is not found pls change your computer "})
        res.status(200).json(users)

     }catch(error){
        res.status(404).json({error : "Error While Fetching Data"})
     }
}

//post - http://localhost:3000/api/users
export async function postUser(req, res){
   try{

      const fromData = req.body;
      if(!formData)return res.status(404).json({error:"Form Data is not provided....!"});
      Users.create(formData,function(err,data){
         return res.status(200).json(data)

      })
      
   }catch(error){
      return res.status(404).json({error})
   }
}

//put - http://localhost:3000/api/users

export async function putUser(req,res){
   try{
      const {userId} = req.query;
      const fromData = req.body;


      if(userId && formData){
         const user = await Users.findByIdAndUpdate(userId, formData);
         res.status(200).json(user)

      }
      res.status(404).json({eroor: "not found"})


   }catch(error){
      res.status(404).json({error : "not found data...!"})

   }
}


//delete - http://localhost:3000/api/users

export async function deleteUser(req,res){
   try{
      const {userId} = req.query;

       if(userId){
         const user = await Users.findByIdAndDelete(userId)
         return res.status(200).json({user})

       } 
       res.status(404).json({error:"User Not Selected"})

      }
   catch(error){
      res.status(404).json({error : "error while deleting user.."})

   }
}

