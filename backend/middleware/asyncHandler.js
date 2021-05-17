const asyncHandler = (controllerfunction) => (req, res, next) =>
  Promise.resolve(controllerfunction(req, res, next)).catch(next);

module.exports = asyncHandler;

//initial function callback/controller function
//the function the callback returns has access to req, res, next
//that function resolves promises of the controllerfunction - the controller
//if there is an error, return next - which handles errors globally
