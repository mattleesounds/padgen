# api/index.py
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS, cross_origin
from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write
import io

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['ENV'] = 'development'

""" @app.route("/generate-music", methods=['POST'])
def generate_music():
    # Load MusicGen model
    model = MusicGen.get_pretrained('facebook/musicgen-medium')
    model.set_generation_params(duration=10)  # Set desired duration

    # Get description from the request
    data = request.json
    description = data.get('description', '')

    # Generate music
    wav = model.generate([description])

    # Convert to bytes and send as response
    buffer = io.BytesIO()
    audio_write(buffer, wav[0].cpu(), model.sample_rate, format="wav")
    buffer.seek(0)
    return send_file(buffer, mimetype="audio/wav", as_attachment=True, download_name="generated_music.wav") """

@app.route("/generate-music", methods=['POST'])
@cross_origin()
def generate_music():
    return "Music generation endpoint reached"

if __name__ == '__main__':
    app.run(debug=True)