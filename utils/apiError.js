class apiError extends Error{
     constructor(statusCode , message, error   ) {
        super(message);
        this.code = statusCode;
        this.error = error;
     }
}
module.exports = apiError