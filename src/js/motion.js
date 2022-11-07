import { animate } from "motion"

animate(".box", { backgroundColor: "red" })

const boxes = document.querySelectorAll(".box")

boxes[0].classList.add("center");

animate(boxes, { backgroundColor: "red" })

animate(
    "#box",
    { x: [0, -100, 100, 0] },
    {
      duration: 5,
      offset: [0, 0.25, 0.75]
    }
  )

  animate(
    "#box",
    { x: 100, rotate: 45 },
    { duration: 0.5 }
  )