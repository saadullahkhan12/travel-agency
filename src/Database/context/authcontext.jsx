import { createContext, useState ,useEffect} from "react";
import {  onAuthStateChanged } from "firebase/auth";
const authcontext = createContext()

function AuthcontextProvider({children}) {
    const [user ,setuser]=useState({islogin:false,userinfo:{}
        

    });
    const [loading ,setloading] = useState(true);
    function onAuthChanged(user) {
        if(user){
            console.log(user);
            
            setuser({islogin:true, userinfo:{

                name:user.dsiplayname,photoURL:user.photoURL,
                email:user.email, 

            }})}
        else{
            setuser({islogin:false})}
        }
      //  setUser(user);
        setloading(false);
      }
    
      useEffect(() => {
        const subscriber = onAuthStateChanged(Auth,onAuthChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
 
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? <div>Loading...</div> : {children}}
        </AuthContext.Provider>
    );
           
       
        
        
        

    

export {AuthcontextProvider,authcontext}
