/// <reference path="../components/jsxtypes.d.ts" />

import { ST7789Driver } from "@devicescript/drivers"
import { Image } from "@devicescript/graphics"
import { scanKeyboard } from "./keyboard"
import { KEY_ARROW_DOWN, KEY_ARROW_UP } from "./keyboard_config"

export function renderOnImage(elt: JSX.Element, image: Image) {
  image.fill(0)
  elt.render(image.allocContext())
}

export const document = async (display: ST7789Driver, callback: (options: {y: number, setY: (n: number) => number}) => JSX.Element) => {
  let y = 0;
  let currentMinY = 0; // page height

  const scrollDistance = 25
  const render = () => {
    let minY = 0; // page height
    const setY = (value: number) => {
      const item = value + y
      minY = item // setting min y to the last y given (we don't know the hight of the last item yet)
      return item
    }
    renderOnImage(
      callback({y, setY}),
      display.image
    )
    currentMinY = minY
  }
  render()
  await display.show()
  await scanKeyboard(async (key) => {
    if (key.includes(KEY_ARROW_UP)) {  
      const forecast = y + scrollDistance
      console.log({ forecast })
      if (forecast > 0) return;
      y = forecast
    }
    if (key.includes(KEY_ARROW_DOWN)) {
      const forecast = y - scrollDistance
      if (forecast < -currentMinY) return;
      y = forecast
    }
    render()
    await display.show()
  })
}