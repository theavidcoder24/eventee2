import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isUserLoggedIn = true;
    /* - is logged in Fetch - */
    // isLogged() {
    //     loadPage();
    //     fetch('api/ws.php?action=is_logged_in', {
    //       method: 'GET',
    //     })
    //       // HTTP Response Codes
    //       .then(function (response) {
    //         if (response.status === 202) {
    //           localStorage.setItem('login', "true");
    //           localStorage.setItem('LoginEmail', log_email);
    //           if (localStorage.getItem('login') == 'true') {
    //             console.log('Logged In!!');
    //             sessionStorage.setItem("login", "true");
    //           }
    //         }
    //         else {
    //           localStorage.setItem('login', "false");
    //           userLogout();
    //           hideUserInfo();
    //         }
    //         if (response.status === 401) {
    //           loadPage();
    //           console.log('Not logged in failed');
    //           errormessage("Error: Not implemented");
    //           localStorage.setItem('login', "false");
    //           if (localStorage.getItem('login') == 'false') {
    //           }
    //           return;
    //         }
    //         if (response.status === 429) {
    //           console.log('Rate limit exceeded');
    //           localStorage.setItem('login', "false");
    //           if (localStorage.getItem('login') == 'false') {
    //             userLogout();
    //             hideUserInfo();
    //           }
    //         }
    //       })
    //       .catch(function (err) {
    //         console.log(err);
    //       });
    //   }
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
