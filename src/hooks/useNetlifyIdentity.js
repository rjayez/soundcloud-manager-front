import {useEffect, useState} from "react";


export const useNetlifyIdentity = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();

    const authenticate = (user) => {
        setIsAuthenticated(true);
        setUser(user);
        netlifyIdentity.close();
    }
    const signout = () => {
        setIsAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
        netlifyIdentity.on('init', user => console.log('init', user));
        netlifyIdentity.on('login', user => {
            console.log('login', user);
            authenticate();
        });
        netlifyIdentity.on('logout', () => signout());
        netlifyIdentity.on('error', err => console.error('Error', err));
        const currentUser = netlifyIdentity.currentUser();
        if(currentUser){
            setUser(currentUser);
            setIsAuthenticated(true);
        } else {
         netlifyIdentity.open();
        }
        console.log(user);
    }, []);

    console.log(isAuthenticated);
    console.log(user);


    return {
        isAuthenticated
    }


}

