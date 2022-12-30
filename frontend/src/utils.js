export const getError = (error) => {

    return error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
}

// this effectively takes the error message from the BE server.js
//res.status(404).send({ message: 'Product Not Found'}); and shows the message if there is no message then just show standard error message 