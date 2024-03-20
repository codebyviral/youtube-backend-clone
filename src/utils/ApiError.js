class ApiError extends Error{
    constructor(
        statusCode,
        message="Something wen wrong",
        errors = [],
        stack = "",
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = this.errors
    }
}