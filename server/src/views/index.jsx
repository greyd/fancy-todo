'use strict';

import React from 'react';

export default React.createClass({
    render() {
        return (
            <html lang="">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <title>Fancy Todo</title>
                    <meta name="description" content="<%= webpackConfig.metadata.title %>" />
                    <base href="/" />
                </head>
                <body>
                    <my-app>
                        Loading...
                    </my-app>
                    <script type="text/javascript" src="polyfills.bundle.js"></script>
                    <script type="text/javascript" src="vendor.bundle.js"></script>
                    <script type="text/javascript" src="main.bundle.js"></script>
                </body>
            </html>
        )
    }
});