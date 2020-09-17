import flask
import flask_cors

app = flask.Flask(__name__)
_ALLOWED_ORIGINS = ("http://localhost/*")
flask_cors.CORS(app, origins=_ALLOWED_ORIGINS)

@app.route('/')
def hello_world():
  return 'Hello, I am being served from a different containers.'

@app.route('/data')
@flask_cors.cross_origin()
def data():
  return flask.jsonify({"data": "Hello World"})
