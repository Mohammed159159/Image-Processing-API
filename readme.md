# Scripts
    "npm run build": compiling typescript files
    "npm run prettier": running prettier
    "npm run lint": running eslint
    "npm run jasmine": running jasmine tests on built files
    "npm run test": building files and running jasmine tests
    "npm run start": start server using nodemon
    "npm run start_": build server and run index.js
# Endpoints
    "http://localhost:3000/": Main route
    "http://localhost:3000/images/?width=image_width&height=image_height&name=image_name": Endpoint for resizing images

# Functionality 
    1. running "npm start_" should build the project and run index.js 
    2. the endpoint of the images should be accessed with the instructions given in the endpoint
    3. a resized image should appear if the paramters are entered correctly
    4. thumbnails folder should be created if it does not exist
    5. resized images should be found in thumbnails folder named as widht_heigth_name.jpg
    6. if an image is created it won't be duplicated
    7. an error with the incorrect paramters will be logged into the console if any params are invalid
    8. running "npm run test" should execute 6 successful specs

# Attributions
    - https://www.youtube.com/watch?v=qCqAVsIavfQ&ab_channel=HossamAbubakr
    - https://www.youtube.com/watch?v=3aRXn8KENjM
    - https://github.com/jasmine/jasmine/issues/1161
    - https://jasmine.github.io/api/2.7/matchers.html
    - https://bobbyhadz.com/blog/javascript-check-if-string-is-positive-integer
    - https://expressjs.com/en/api.html#res.get
    - https://jasmine.github.io/tutorials/async
    - https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js
    - https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js
    - https://stackoverflow.com/questions/11569181/serve-static-files-on-a-dynamic-route-using-express
    - https://www.npmjs.com/package/sharp