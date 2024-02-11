
import { LedStripLightType, LedVariant, gpio } from "@devicescript/core"
import { LedServerOptions, startLed } from "@devicescript/drivers"
import { ServerOptions } from "@devicescript/server"

export const m5StampLedSettings: LedServerOptions & ServerOptions = {
  length: 1,
  intensity: 0.1,
  variant: LedVariant.Matrix,
  hwConfig: {
    type: LedStripLightType.WS2812B_GRB,
    pin: gpio(21)
  },
}

export const hexColor = (color: string | number) => {
  // @ts-ignore
  return typeof color === 'number' ? color : parseInt(`0x${color}`, 16)
}

export async function showLed (color: string | number) {
  const led = await startLed(m5StampLedSettings)
  await led.showAll(hexColor(color))
}

export async function turnOff () {
  await showLed('000000')
}