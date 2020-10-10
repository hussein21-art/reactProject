import axios from 'axios';

export async function getUsers(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response;
    }catch(error){
      console.error( error );
    }
}
