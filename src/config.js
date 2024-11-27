import {config} from  'dotenv' ;  // Import dotenv to load environment variables from .env file
config();  // Load environment variables from .env file


console.log(process.env.NOMBRE);  

export  default  { 
    port: process.env.PORT || 3000 
}
