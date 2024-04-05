import React, { useEffect } from 'react';
import Particles from 'particles.js';
import ParticleData from '../data/particlesjs-config.json';

const Particle = () => {
  useEffect(() => {
    // Load particles.js and configure the particles
    Particles.load('particles-js', ParticleData, function() {
      console.log('callback - particles-js config loaded');
    });
  }, []);

  return (
    <div id="particles-js" style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>
  );
};

export default Particle;
