import requests
import flask

response = requests.get("https://api.usaspending.gov/api/v2/recipient/state/")
print(response.text)


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/states', methods=['GET'])
def home():
    return (response.text)

app.run()