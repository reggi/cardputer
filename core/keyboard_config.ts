// pulled from https://github.com/m5stack/M5Cardputer/blob/889cbd7b9d8c395205e22e924a383bd07089b14c/src/utility/Keyboard.h

export const inputPinList = [13, 15, 3, 4, 5, 6, 7]
export const outputPinList = [8, 9, 11]

export const KEY_BACKSPACE = 'Backspace'; // Adjust based on actual values
export const KEY_TAB = 'Tab';
export const KEY_FN = 'Fn';
export const KEY_LEFT_SHIFT = 'Shift';
export const KEY_LEFT_CTRL = 'Control';
export const KEY_OPT = 'Option';
export const KEY_LEFT_ALT = 'Alt';
export const KEY_ENTER = 'Enter';
export const KEY_ARROW_UP = 'ArrowUp';
export const KEY_ARROW_DOWN = 'ArrowDown';
export const KEY_ARROW_LEFT = 'ArrowLeft';
export const KEY_ARROW_RIGHT = 'ArrowRight';

export const shiftKey: [string, string, string?] = [KEY_LEFT_SHIFT, KEY_LEFT_SHIFT]
export const fnKey: [string, string, string?] = [KEY_FN, KEY_FN]

// Define the _key_value_map as a 2D array (matrix) in TypeScript
export const keyValueMap: [string, string, string?][][] = [
  [['`', '~'],
   ['1', '!'],
   ['2', '@'],
   ['3', '#'],
   ['4', '$'],
   ['5', '%'],
   ['6', '^'],
   ['7', '&'],
   ['8', '*'],
   ['9', '('],
   ['0', ')'],
   ['-', '_'],
   ['=', '+'],
   [KEY_BACKSPACE, KEY_BACKSPACE]],
  [[KEY_TAB, KEY_TAB],
   ['q', 'Q'],
   ['w', 'W'],
   ['e', 'E'],
   ['r', 'R'],
   ['t', 'T'],
   ['y', 'Y'],
   ['u', 'U'],
   ['i', 'I'],
   ['o', 'O'],
   ['p', 'P'],
   ['[', '{'],
   [']', '}'],
   ['\\', '|']],
  [fnKey,
  shiftKey,
   ['a', 'A'],
   ['s', 'S'],
   ['d', 'D'],
   ['f', 'F'],
   ['g', 'G'],
   ['h', 'H'],
   ['j', 'J'],
   ['k', 'K'],
   ['l', 'L'],
   [';', ':', KEY_ARROW_UP],
   ['\'', '\"'],
   [KEY_ENTER, KEY_ENTER]],
  [[KEY_LEFT_CTRL, KEY_LEFT_CTRL],
   [KEY_OPT, KEY_OPT],
   [KEY_LEFT_ALT, KEY_LEFT_ALT],
   ['z', 'Z'],
   ['x', 'X'],
   ['c', 'C'],
   ['v', 'V'],
   ['b', 'B'],
   ['n', 'N'],
   ['m', 'M'],
   [',', '<', KEY_ARROW_LEFT],
   ['.', '>', KEY_ARROW_DOWN],
   ['/', '?', KEY_ARROW_RIGHT],
   [' ', ' ']]
];

interface ChartT {
  value: number;
  x_1: number;
  x_2: number;
}

export const xMapChart: ChartT[] = [
  { value: 1, x_1: 0, x_2: 1 },
  { value: 2, x_1: 2, x_2: 3 },
  { value: 4, x_1: 4, x_2: 5 },
  { value: 8, x_1: 6, x_2: 7 },
  { value: 16, x_1: 8, x_2: 9 },
  { value: 32, x_1: 10, x_2: 11 },
  { value: 64, x_1: 12, x_2: 13 },
];