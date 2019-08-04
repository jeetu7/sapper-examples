# This directory if for running jwt auth REST API endpoints using python based
# flask webserver. These endpoints will be accessed using sapper/svelte.
# Note: The praterorian code is taken from 
# https://github.com/dusktreader/flask-praetorian/blob/master/example/refresh.py


# Create a virtualenv and install the requisite dependencies

  pip install flask-pratetorian flask-cors flask-sqlalchemy flask


# Open a terminal and start the flask server in the virtulaenv

  FLASK_APP=app.py FLASK_ENV=development flask run

# Open another terminal and activate the virtualenv.
# Run the following to see the REST endpoints 

  FLASK_APP=app.py FLASK_ENV=development flask routes

# The above commands should show following REST endpoints

  Endpoint      Methods  Rule
  ------------  -------  -----------------------
  disable_user  POST     /disable_user
  login         POST     /login
  protected     GET      /protected
  refresh       GET      /refresh
  static        GET      /static/<path:filename>
  
