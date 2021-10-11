import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/* steps for authentication

-----------------------------
Step-1: Initial Setup
1.firebase:create app
2.create web app
3.get configuration
4.initialize firebase
5.Enable auth method
-----------------------------

Step-2:(setUpn components)
1.Create a Login component
2.Create a Register component
3.Create a route for Login and Register
------------------------------

Step-3:(set auth system)
1.set up sign in method
2.set up sign out method
3.user state
4.special observer
5.return necessary methods  states from firebase
--------------------------------------
step-4: create auth context hook (useAuth)
1.create auth context
2.create context provider
3.set context provider's context value
4.use auth provider
5.create useAuth hook
-----------------------------------

Step-5:(create private Route)
1.create private Route
2.set private Route

---------------------------
step-6: Redirect after login
1.after login redirect user to their desire destination
*/