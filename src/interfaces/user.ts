 export  type IUser = FacebookUser | GoogleUser;
    
 export interface FacebookUser {
   id: string;
   first_name: string;
   last_name: string;
   email: string;
   name: string;
 }


 export interface GoogleUser {
    id:string;
    firstname: string;
    lastname: string;
    email: string  ;
    fullName:string
}


