import { spi } from "@devicescript/spi"
import { gpio, GPIOMode } from "@devicescript/core"
import { ST7789Driver } from "@devicescript/drivers"
import { Image } from "@devicescript/graphics"

export const Colors = {
  transparent: 0,
  white: 1,
  red: 2,
  pink: 3,
  orange: 4,
  yellow: 5,
  seablue: 6,
  limegreen: 7,
  blue: 8,
  teal: 9,
  purple: 10,
  lavender: 11,
  mauve: 12,
  peach: 13,
  maroon: 14,
  black: 15
}

export function getDisplay () {
  spi.configure({
    mosi: gpio(35),
    sck: gpio(36),
    hz: 8_000_000,
  })

  // backlight led
  gpio(38).setMode(GPIOMode.OutputHigh)

  const height = 240
  const width = 136

  const display = new ST7789Driver(Image.alloc(height, width, 4), {
      dc: gpio(34),
      cs: gpio(37),
      reset: gpio(33),
      // frmctr1: 0x0e_14_ff,
      flip: false,
      spi: spi,
      
      offX: 40,
      offY: 53,
  })
  return display
}