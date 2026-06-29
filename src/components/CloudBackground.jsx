import {useEffect, useState} from 'react';

//every cloud has an id, size, x, y, and opacity
//every moving cloud has an id, size, x, y, delay, and animationDuration

export const CloudBackground = () => {
  const [clouds, setClouds] = useState([])
      const [movingClouds, setMovingClouds] = useState([])
  
      useEffect(() => {
          generateClouds();
          generateMovingClouds();
  
          const handleResize = () => {   
            generateClouds();
          }
  
          window.addEventListener('resize', handleResize);
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
  
      const generateClouds = () => {
          const numberOfClouds = 4; //fixed number of clouds
          const newClouds = []
  
          for (let i = 0; i < numberOfClouds; i++) {
               // generate random properties for each cloud
                  newClouds.push({
                  id: i,
                  size: Math.random() * 100 + 100,
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: Math.random() * 0.5 + 0.5,
              });
          }
          setClouds(newClouds);
      };
  
       const generateMovingClouds = () => {
          const numberOfMovingClouds = 4; // fixed number of moving clouds
  
          const newMovingClouds = []
  
          for (let i = 0; i < numberOfMovingClouds; i++) {
              newMovingClouds.push({
                  id: i,
                  size: Math.random() * 100 + 100,
                  x: Math.random() * 20,
                  y: Math.random() * 100,
                  delay: Math.random() * 15, 
                  animationDuration: Math.random() * 12 + 6

              });
          }
          setMovingClouds(newMovingClouds);
      };
  
      return (
        // gradient blue background that randomly generates clouds and moving clouds
          <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-blue-400 to-white"> 
              {clouds.map((cloud) => (
                  <div 
                      key={cloud.id} 
                      className="cloud" 
                      style={{
                          width: cloud.size + "72px",
                          height: cloud.size + "72px",
                          left: cloud.x + "%",
                          top: cloud.y + "%",
                          opacity: cloud.opacity,
                          animationDuration: cloud.animationDuration + "s",
                      }} 
                  />
              ))}
  
              {movingClouds.map((movingCloud) => (
                  <div 
                      key={movingCloud.id} 
                      className="cloud animate-slide-across" 
                      style={{
                          width: movingCloud.size + "72px",
                          height: movingCloud.size + "72px",
                          left: movingCloud.x + "%",
                          top: movingCloud.y + "%",
                          animationDelay: movingCloud.delay,
                          animationDuration: movingCloud.animationDuration + "s",
                      }} 
                  />
              ))}
          </div>
      );
    };
