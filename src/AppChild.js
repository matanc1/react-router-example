import React from 'react';

import { Link } from 'react-router';

const AppChild = ({history}) => {

    return (
        <div>
            Hello world again!
            <button onClick={() => history.push("/example")}>click me</button>
        </div>
    )
}

export default AppChild;