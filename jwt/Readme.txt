The idea of this sub-project is that there is a backend generating REST api
with jwt token based auth. The JWTs are created in the backend. The backend can
be implemented using any technology. One example is python's flask based
webserver. 

The sapper will authenticate with the backend API. 

Login: User will login using svelte page using html FORM POST. The request will
go to the sapper backend which will have some http middleware proxy. It will
further send the query to the REST API backend. The API backend will send the
jwt to sapper. The sapper will store the JWT in REDIS and/or session. 

Logged-in Session: Afterwards the frontend will send the httponly session
cookie with each request. The sapper's http middleware proxy will keep adding
the jwt token for authentication cum commuincation with the REST backend. 

Logout will be handled by frontend by hitting a logout request which will
delete the jwt from REDIS and invalidate the session cookie.


# For frontend
Setup done using standard 
  npx degit sveltejs/sapper-template#rollup frontend
  npm install
  npm install express-session session-file-store body-parser 

References:
https://www.nielsvandermolen.com/authentication-example-svelte-sapper/
https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/
https://gist.github.com/antony/f6dabbf804f4b5f06706556f7a4341c3
https://github.com/sveltejs/realworld
