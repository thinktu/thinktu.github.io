require.config({
    paths: {
        jquery: 'jquery',
        bootstrap: 'bootstrap.min',
        less:'less.min',
        index:'index'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        less:{
        	deps:['jquery']
        },
        index:{
        	deps:['jquery']
        },
        login:{
        	deps:['jquery']
        }

    }
});
define(['jquery','bootstrap','less','index','login'],function($,bs,less,index,login){
	
	
});
