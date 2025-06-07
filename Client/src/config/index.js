export const config = {
    pages : { 
        "/" : {
            sidebar : false,
            title : "Main page",
            colorTheme:  "default"
        },
        "/contact" : {
            sidebar : false,
            title : "Contact page",
            colorTheme:  "dark"
        },
        "/about" : {
            sidebar : false,
        },
        "/categories/list" : {
            sidebar : true,
        },
    },
    endpoints :   {
        login : '/postlogin',
        register : '/postregister',

    },
    backend: 'http://localhost:5000'

}