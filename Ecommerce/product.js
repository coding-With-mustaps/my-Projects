/**
 * ! SECTION FOR ANOTHER GROUP OF PRODUCTS IN THE COLUMN FORM
 * ? In the HTML document where I have 3 columns of products 
 */

const PRODUCTS_CONTAINER_FIRST = [{
        name: 1,
        img: "../image/H8da38dbfc36f49a3b062434061048cd1k.jpg_350x350.jpg",
        p: 'This is original used laptops'
    },
    {
        name: 2,
        img: "../image/H8da38dbfc36f49a3b062434061048cd1k.jpg_350x350.jpg",
        p: 'This is original used laptops'
    },
    {
        name: 3,
        img: "../image/H8da38dbfc36f49a3b062434061048cd1k.jpg_350x350.jpg",
        p: 'This is original used laptops'
    },
];

/**
 * ! SECTION FOR ANOTHER GROUP OF PRODUCTS IN THE COLUMN FORM
 * ? In the HTML document where I have 3 columns of products 
 */

const PRODUCTS_CONTAINER_SECOND = [{
        name: 5,
        img: "../image/H582b17f945214911aaae52dc368cc35ed.jpg_220x220.jpg",
        p: 'This is original used laptops'
    },
    {
        name: 6,
        img: '../image/H8da38dbfc36f49a3b062434061048cd1k.jpg_350x350.jpg',
        p: 'This is original used laptops'
    },
    {
        name: 7,
        img: "../image/H8da38dbfc36f49a3b062434061048cd1k.jpg_350x350.jpg",
        p: 'This is original used laptops'
    },
];

/**
 * ! SECTION FOR ANOTHER GROUP OF PRODUCTS IN THE COLUMN FORM
 * ? In the HTML document where I have 3 columns of products 
 */

const PRODUCTS_CONTAINER_THIRD = [{
        name: 5,
        img: '../image/H2c8316cb13ba4fbcbc34d2093996cb19N.jpg_220x220.jpg',
        p: 'This is original iphone 11 pro'
    },
    {
        name: 6,
        img: '../image/Hc847c4a7999644baadd82219a9b821c5r.jpg_220x220.jpg',
        p: 'iphone 12 pro max'
    },
    {
        name: 7,
        img: "../image/Hd77d9bd1d8424ff1933e25fcfd147275v.jpg_220x220.jpg",
        p: 'Original iphone 13 unlock '
    },
];

/**
 * ! SECTION FOR INSPIRATION SECTION IN THE HTML DOCUMENT.
 */

const productInspirationArray = [{
        img: "../image/Hd0955aa72d7844f48ec0320aef4e1684w.jpg_350x350.jpg",
        p: 'This is cool',
        min_price: 120,
        max_price: 150,
        orderLevel: 10,
        orderType: 'pieces'
    },
    {
        img: "../image/A47e01aeae6f544eb83b796fe96da5478h.jpg_350x350.jpg",
        p: `A very cool price for women's hair`,
        min_price: 80,
        max_price: 120.5,
        orderLevel: 5,
        orderType: 'pieces'
    },
    {
        img: "../image/Hf8f5a5a69193401ab2bf0d030c3530eb6.jpg_350x350.jpg",
        p: 'Ultra 10 pro. An original airpod',
        min_price: 2,
        max_price: 15,
        orderLevel: 20,
        orderType: 'pieces'
    },
    {
        img: "../image/28.jpg",
        p: 'Original fresh tomato.',
        min_price: 30,
        max_price: 200,
        orderLevel: 100,
        orderType: 'kg'
    },
    {
        img: "../image/mahrous-houses-5AoOejjRUrA-unsplash.jpg",
        p: 'Combine printer with resolution.',
        min_price: 700,
        max_price: 2000,
        orderLevel: 1,
        orderType: 'piece'
    },
    {
        img: "../image/mufid-majnun-UdDCjj0rR7c-unsplash.jpg",
        p: 'Chiness main original printer for both printing and photocopie.',
        min_price: 100,
        max_price: 1500,
        orderLevel: 1,
        orderType: 'piece'
    },


];

// I could export all the array as an object and import the object then destructure it. Using the ES6 2015 features.
/**
 * ! But I like it this way
 */
export { PRODUCTS_CONTAINER_FIRST, PRODUCTS_CONTAINER_SECOND, PRODUCTS_CONTAINER_THIRD, productInspirationArray };