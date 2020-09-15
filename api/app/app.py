import flask

app = flask.Flask(__name__)

@app.route('/')
def hello_world():
  return 'Hello, I am being served from a different containers.'

@app.route('/data')
def data():
  return flask.jsonify({"data": "Hello Worldsss"})
