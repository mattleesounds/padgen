# api/index.py
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS, cross_origin
from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write
import io

app = Flask(__name__)
CORS(app)

@app.route("/generate-music", methods=['POST'])
@cross_origin()
def generate_music():
    try:
        # Load MusicGen model
        model = MusicGen.get_pretrained('facebook/musicgen-small')
        model.set_generation_params(duration=1)  # Set desired duration

        # Get description from the request
        data = request.json
        description = data.get('description', '')

        # Log received data for debugging
        print("Received description:", description)

        # Generate music
        wav = model.generate([description])

        # Convert to bytes and send as response
        buffer = io.BytesIO()
        audio_write(buffer, wav[0].cpu(), model.sample_rate, format="wav")
        buffer.seek(0)
        return send_file(buffer, mimetype="audio/wav", as_attachment=True, download_name="generated_music.wav")
    
    except Exception as e:
        # Log the exception for debugging
        print("Error during music generation:", str(e))
        return jsonify({"error": str(e)}), 500

""" @app.route("/generate-music", methods=['POST'])
@cross_origin()
def generate_music():
    return {"Music": "Generated"}, 200 """

""" @app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response """

if __name__ == "__main__":
    app.run(debug=True)