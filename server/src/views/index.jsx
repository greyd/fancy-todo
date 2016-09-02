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
                    <base href="/" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" />
                </head>
                <body>
                    <my-app>
                        <div class="preloader-wrapper active">
                            <div class="spinner-layer spinner-red-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>

                    </my-app>
                    <script type="text/javascript" src="polyfills.bundle.js"></script>
                    <script type="text/javascript" src="vendor.bundle.js"></script>
                    <script type="text/javascript" src="main.bundle.js"></script>
                </body>
            </html>
        )
    }
});