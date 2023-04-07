import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#0a93eb',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              color: '#ffffff',
              frequency: 0.01,
              opacity: 1,
            },
            lines: {
              enable: true,
              color: '#0a93eb',
              frequency: 0.001,
              opacity: 1,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            // ondiv: {
            //   elementId: '__next',
            //   enable: true,
            //   mode: 'repulse',
            //   type: 'circle',
            // },
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: '#0d48a10',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  )
}

export default BackgroundParticles
