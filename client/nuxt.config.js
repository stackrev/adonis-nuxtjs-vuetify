import colors from 'vuetify/es5/util/colors';

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/axios'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/vuetify'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/auth', '@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/toast'],
    /*
     ** auth module configuration
     */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/api/auth/login',
                        method: 'post',
                        propertyName: 'token'
                    },
                    user: {
                        url: '/api/auth/user',
                        method: 'get',
                        propertyName: 'data'
                    },
                    logout: {
                        url: '/api/auth/logout',
                        method: 'get',
                        propertyName: false
                    },
                    tokenRequired: true,
                    tokenType: 'Bearer'
                }
            }
        }
    },
    /*
     ** axios module configuration
     */
    axios: {
        credentials: true,
        progress: true,
        proxy: true
    },
    /*
     ** axios proxy configuration
     */
    proxy: ['http://127.0.0.1:3333/api'],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        rtl: true,
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Toast configuration
     */
    toast: {
        duration: 3000,
        position: 'bottom-center',
        iconPack: 'mdi'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};