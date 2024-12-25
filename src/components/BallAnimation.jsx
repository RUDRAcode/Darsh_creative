import React, { useEffect, useState } from 'react';

const BallAnimation = () => {
  const colors = [""];
  const numBalls =250;

  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const newBalls = [];
    for (let i = 0; i < numBalls; i++) {
      const ball = {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.floor(Math.random() * 30)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        scale: Math.random(),
        size: `${Math.random()*2.5}rem`,
        animation: {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12,
          duration: (Math.random() + 1) * 5000,
        },
      };
      newBalls.push(ball);
    }
    setBalls(newBalls);
  }, []);

  return (
    <div className="h-full blur-sm">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: ball.color,
            left: ball.left,
            top: ball.top,
            transform: `scale(${ball.scale})`,
            width: ball.size,
            height: ball.size,
            animation: `moveBall${ball.id} ${ball.animation.duration}ms ease-in infinite alternate`,
          }}
        />
      ))}
      <style>
        {balls.map((ball) => (
          <React.Fragment key={ball.id}>
            {`
              @keyframes moveBall${ball.id} {
                0% {
                  transform: translate(0, 0);
                }
                100% {
                  transform: translate(${ball.animation.x}cm, ${ball.animation.y}cm);
                }
              }
            `}
          </React.Fragment>
        ))}
      </style>
    </div>
  );
};

export default BallAnimation;
