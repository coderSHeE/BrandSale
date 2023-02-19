import AddUserForm from '../components/addUserForm';
import UpdateUserForm from '../components/updateUserForm'

export default function Form(){

    const flag= true;

   return (
    <div className='container mx-auto py-5'>

         {flag? <AddUserForm/>:<UpdateUserForm/>}
    </div>
   )
}