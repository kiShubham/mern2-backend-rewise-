const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (request, response, next) => {
  const { authorization } = request.headers;
  if (authorization === PASSWORD) {
    return next();
  } else {
    return response.sendStatus(403);
  }
};

module.exports = { verifyAuth };
