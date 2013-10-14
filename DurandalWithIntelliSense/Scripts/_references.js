/// <reference path="bootstrap.js" />
/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-1.9.1.intellisense.js" />
/// <reference path="knockout-2.3.0.debug.js" />
/// <reference path="require.js" />
/// <reference path="require.intellisense.js" />

requirejs.config({
    baseUrl: "/",

    paths: {
        'views': 'App/views',
        'viewmodels': 'App/viewmodels',
        'text': 'Scripts/text',
        'durandal': 'Scripts/durandal',
        'plugins': 'Scripts/durandal/plugins',
        'transitions': 'Scripts/durandal/transitions'
    }
});