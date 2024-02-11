import { GPIOMode, InputPin, OutputPin, gpio } from "@devicescript/core";
import "@devicescript/gpio"
import { fnKey, inputPinList, keyValueMap, outputPinList, shiftKey, xMapChart } from "./keyboard_config";
// migrated from https://github.com/m5stack/M5Cardputer/blob/889cbd7b9d8c395205e22e924a383bd07089b14c/src/utility/Keyboard.cpp

const inputPin = (n: number): InputPin => {
  const g = gpio(n);
  g.setMode(GPIOMode.InputPullUp);
  return g
}

const outputPin = (n: number): OutputPin => {
  const g = gpio(n);
  g.setMode(GPIOMode.Output);
  return g
}

function digitalRead (pin: number) {
  return inputPin(pin).value
}

function digitalWrite (pin: number, value: number) {
  return outputPin(pin).write(value)
}

function getInput(pinList: number[]): number {
  let buffer: number = 0;
  let pinValue: number = 0;
  for (let i = 0; i < 7; i++) {
    pinValue = digitalRead(pinList[i]) === 1 ? 0 : 1;
    pinValue = pinValue << i;
    buffer = buffer | pinValue;
  }
  return buffer;
}

function setOutput (pinList: number[], output: number) {
  output = output & 0B00000111;
  digitalWrite(pinList[0], (output & 0B00000001));
  digitalWrite(pinList[1], (output & 0B00000010));
  digitalWrite(pinList[2], (output & 0B00000100));
}

function updateKeyList() {
  const keys: [string, string, string?][] = [];
  for (let i = 0; i < 8; i++) {
    setOutput(outputPinList, i);
    const inputValue = getInput(inputPinList);
    if (inputValue) {
      for (let j = 0; j < 7; j++) {
        if ((inputValue & (1 << j)) !== 0) {
          const coor = { x: 0, y: 0 };
          coor.x = (i > 3) ? xMapChart[j].x_1 : xMapChart[j].x_2;
          coor.y = (i > 3) ? (i - 4) : i;
          coor.y = -coor.y;
          coor.y = coor.y + 3;
          const value = keyValueMap[coor.y][coor.x]
          if (value !== null) {
            keys.push(value);
          }
        }
      }
    }
  }
  return keys
}

export async function rawScanKeyboard(callback: (keys: [string, string, string?][]) => void | Promise<void>) {
  const scanAndLog = async () => {
    // await resetPins()
    const pressedKeys = updateKeyList();
    if (pressedKeys.length > 0) {
      await callback(pressedKeys)
    }
  };
  await scanAndLog();
  // Set up an interval to repeatedly scan the keyboard
  setInterval(async () => {
    await scanAndLog();
  }, 100); // Adjust the interval as needed
}

export async function scanKeyboard (callback: (keys: string[]) => void | Promise<void>) {
  await rawScanKeyboard(async (keys) => {
    if (keys.length === 0) return;
    
    if (keys.includes(shiftKey)) {
      keys = keys.filter(k => k !== shiftKey)
      if (keys.length === 0) return;
      const resolve = keys.map(k => k[1])
      if (resolve.filter(v => v).length === 0) return;
      return await callback(resolve)
    }

    if (keys.includes(fnKey)) {
      keys = keys.filter(k => k !== fnKey)
      if (keys.length === 0) return;
      const resolve = keys.map(k => k[2])
      if (resolve.filter(v => v).length === 0) return;
      return await callback(resolve)
    }

    return await callback(keys.map(k => k[0]))
  })
}
