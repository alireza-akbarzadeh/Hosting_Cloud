import React from 'react';

type PropTypes = {
    loading: boolean;
    page: boolean;
}
const LoadingView = (props: PropTypes) => {
    const {page, loading} = props;
    return (
        <div>
            Loading View
        </div>
    );
};

export default LoadingView;
