import { Colors, getDisplay } from "./lcd"

const display = getDisplay()

await display.init()

display.image.fill(Colors.purple)

await display.show()