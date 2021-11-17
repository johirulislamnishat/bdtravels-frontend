import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, setUser, isLoading } = useAuth();
    // if (isLoading) {
    //     return 'All Ok'
    //     // <Button className='w-100 mx-auto' variant="primary" disabled>
    //     //     <Spinner
    //     //         as="span"
    //     //         animation="border"
    //     //         size="sm"
    //     //         role="status"
    //     //         aria-hidden="true"
    //     //     />
    //     //     <span className='ml-2'>Loading...</span>
    //     // </Button>
    // }
    return (
        <Route

            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }}></Redirect>}

        ></Route>

    );
};

export default PrivateRoute;