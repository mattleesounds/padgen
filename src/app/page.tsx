"use client";
import Image from "next/image";
// pages/index.tsx or components/Home.tsx
import { useState } from "react";
import "../styles/sliderStyles.css";

const chordTypes = ["Drone", "Neutral", "Major", "Minor"];

const Home = () => {
  const [key, setKey] = useState<number>(0); // 0-11 for C to B
  const [isMajor, setIsMajor] = useState<boolean>(true);
  const [brightness, setBrightness] = useState<number>(50);
  const [density, setDensity] = useState<number>(50);
  const [modulation, setModulation] = useState<number>(50);
  const [spatiality, setSpatiality] = useState<number>(50);
  const [chordTypeIndex, setChordTypeIndex] = useState<number>(1);

  const handleGenerate = () => {
    // Handle music generation logic here
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4 max-w-2xl">
        <div>
          <label htmlFor="key-slider">Key: {key}</label>
          <input
            type="range"
            id="key-slider"
            min="0"
            max="11"
            value={key}
            onChange={(e) => setKey(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <div className="max-w-lg">
          <label htmlFor="chord-type-slider">
            Chord Type: {chordTypes[chordTypeIndex]}
          </label>
          <input
            type="range"
            id="chord-type-slider"
            min="0"
            max="3"
            value={chordTypeIndex}
            onChange={(e) => setChordTypeIndex(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <div>
          <label htmlFor="brightness-slider">Brightness: {brightness}</label>
          <input
            type="range"
            id="brightness-slider"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <div>
          <label htmlFor="density-slider">Density: {density}</label>
          <input
            type="range"
            id="density-slider"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <div>
          <label htmlFor="modulation-slider">Modulation: {modulation}</label>
          <input
            type="range"
            id="modulation-slider"
            value={modulation}
            onChange={(e) => setModulation(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <div>
          <label htmlFor="spatiality-slider">Spatiality: {spatiality}</label>
          <input
            type="range"
            id="spatiality-slider"
            value={spatiality}
            onChange={(e) => setSpatiality(Number(e.target.value))}
            className="w-full slider-thumb slider-track"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Generate
        </button>
      </div>

      <div className="mt-8">
        {/* Placeholder for audio file */}
        <audio controls>{/* Source of the audio file goes here */}</audio>
        <button className="px-4 py-2 bg-black text-white rounded mt-2">
          Download
        </button>
      </div>
    </div>
  );
};

export default Home;
