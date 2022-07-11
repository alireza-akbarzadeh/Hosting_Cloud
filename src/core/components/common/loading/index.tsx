import React from 'react';
import LoadingView from "./loading.view";

type PropTypes = {
    loading: boolean;
    page: boolean;
}
const LoginComponent = (props: PropTypes) => {
    return (
     <LoadingView {...props} />
    );
};

export default LoginComponent;
