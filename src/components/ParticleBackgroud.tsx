import Particles from "react-particles-js";
import React from "react";

const particles = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 2000
            }
          },
          color: {
            value: "#9b9b9b"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#000000"
            },
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#9b9b9b",
            opacity: 0.5,
            width: 0.5
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            // bubble: {
            //   distance: 400,
            //   size: 40,
            //   duration: 2,
            //   opacity: 8,
            //   speed: 3
            // },
            repulse: {
              distance: 100,
              duration: 1
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);

export default particles;