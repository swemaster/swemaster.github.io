//import { animate } from './node_modules/motion'

const animate = require('./node_modules/motion');

animate(
  "#box",
  { rotate: 90 },
  {
    duration: 0.5,
    easing: "ease-in-out",
    repeat: 3,
    direction: "alternate"
  }
)