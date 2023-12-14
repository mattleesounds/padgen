"use client";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [key, setKey] = useState(50);
  const [chordType, setChordType] = useState(50);
  const [quality, setQuality] = useState(50);
  const [intensity, setIntensity] = useState(50);

  const handleGenerate = () => {
    // Handle music generation logic here
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <div>
          <label htmlFor="key-slider">Key: {key}</label>
          <input
            type="range"
            id="key-slider"
            value={key}
            onChange={(e) => setKey(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="chord-type-slider">Chord Type: {chordType}</label>
          <input
            type="range"
            id="chord-type-slider"
            value={chordType}
            onChange={(e) => setChordType(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="quality-slider">Quality: {quality}</label>
          <input
            type="range"
            id="quality-slider"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="intensity-slider">Intensity: {intensity}</label>
          <input
            type="range"
            id="intensity-slider"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Generate
        </button>
      </div>
      <div className="mt-8">
        {/* Placeholder for audio file */}
        <audio controls>{/* Source of the audio file goes here */}</audio>
        <button className="px-4 py-2 bg-green-500 text-white rounded mt-2">
          Download
        </button>
      </div>
    </div>
  );
};

export default Home;
