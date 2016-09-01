'use strict';

import React from 'react';

export default React.createClass({
    render() {
        return (
            <form action="/login" method="post">
                <input type="text" name="login" />
                <input type="password" name="password" />
                <input type="submit" value="submit"/>
            </form>
        )
    }
});