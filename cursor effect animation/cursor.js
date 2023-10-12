import { neonCursor } from 
'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'


neonCursor({
    el: document.getElementById('app'),
    shaderPoints:10,
    curvePoints:90,
    curveLerp: 0.5,
    raduis1: 2,
    raduis2: 30,
    velocityTreshold:10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025,
})