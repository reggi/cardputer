import { getDisplay } from "cardputer/core/lcd"
import { document } from "cardputer/core/document"
import { Text } from "cardputer/components/Text";

const animals: string[] = ["Otters", "Wolverines", "Octopuses", "Pigs", "Rabbits", "Reptiles", "Lizards", "Snakes"];

const display = getDisplay()
await display.init()

// this lets you "scroll y" with fn + arrow keys

await document(display, ({setY}) => {
  return <>
    {animals.map((animal, index) => (
      <Text y={setY(index * 25)} fontScale={2}>
        {animal}
      </Text>
    ))}
  </>
})