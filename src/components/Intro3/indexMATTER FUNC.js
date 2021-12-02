import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

const Intro3 = (props) => {
  const scene = useRef("scene");
  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: "100%",
        height: "100%",
        wireframes: false,
      },
    });

    var ballA = Bodies.square(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.square(110, 50, 30, { restitution: 0.5 });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
      Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    World.add(engine.world, [ballA, ballB]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Engine.run(engine);

    Render.run(render);
  }, []);

  return <div ref={scene} />;
};
export default Intro3;