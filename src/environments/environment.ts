export const environment = {
    production: false,
    base_api: 'http://localhost:3000',
    api_version: 'v1',
    currentVersion: '1.5.3',
    auth0: {
        client: "rdHs08kGjhvFT71uWvSWSQUrTtknW1ZG",
        domain: "dev-blucf6ji.us.auth0.com",
        redirect_url: 'http://localhost:4200/',
    },
    imagekit: {
        publicKey: 'public_o4qnNX72jwuYeey9sUF1Y63l0hg=',
        urlEndpoing: 'https://ik.imagekit.io/if2rt85i8',
    }
};


/**
 * PLEASE UNCOMMENT BEFORE PRODUCTION BUILD
 * USING 2 DIFFERENT ENV FILES SEEMS TO NOT BE WORKING CORRECTLY
 *
 * * NOTE: THE BELOW CONFIG IS USING A DIFFERENT AUTH0 INSTANCE FOR STAGING ONLY
 */


// export const environment = {
//     production: true,
//     base_api: 'https://sea-turtle-app-nzuyq.ondigitalocean.app',
//     api_version: 'v1',
//     currentVersion: '1.5.3',
//     auth0: {
//         client: "wfLeAroorwrhe7gWyJGFtZvhRbyOisfp",
//         domain: "dev-blucf6ji.us.auth0.com",
//         redirect_url: 'https://green-genius.org/',
//     },
//     imagekit: {
//         publicKey: 'public_o4qnNX72jwuYeey9sUF1Y63l0hg=',
//         urlEndpoing: 'https://ik.imagekit.io/if2rt85i8',
//     }
// };
