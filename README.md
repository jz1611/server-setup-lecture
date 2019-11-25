# Express
- Student can apply express.json as top level middle-ware
- Student can access the body from req.body
- Student can use post, put, delete methods to handle the associated requests
# Top-Level Middleware
- Student can describe how app.use is fired before every endpoint declared after it.
- Student can set up express.json in an app.use() at the top of their server file.
# Tooling - Postman
- Student can send requests to their server with Postman.
- Student can send requests to their server with Postman including a body in the request.
- Student can send requests to their server with Postman including params in the request.
# Express Patterns
- Student can set up a controller to export content with module.exports and require that controller in their server file.
- Student can write endpoint handler functions in the controller file and then reference them in the endpoint in the server file.


- **query:**

client-side: `/api?key=value`
server-side: `/api`
standsfor: what i would like to do to a resouce, or filter through a resource


- **params:**

client-side: `/api/student/1`
server-side: `/api/student/:id`
standsfor: resource => individual student