/// <reference path="./jsxtypes.d.ts" />
import * as ds from "@devicescript/core"
import { ImageContext } from "@devicescript/graphics"

export { ImageContext }

/**
 * Type-safe wrapper for Object.assign()
 */
export function setup<T, S extends T>(self: S, props: T) {
  Object.assign(self, props)
}

export abstract class BaseElement implements JSX.Element {
  abstract render(ctx: ImageContext): void
}

export abstract class PositionElement extends BaseElement {
  x: number
  y: number
}

export abstract class ParentElement extends BaseElement {
  children?: JSX.Element | JSX.Element[]

  renderChildren(ctx: ImageContext) {
      if (!this.children) return
      if (Array.isArray(this.children))
          for (const ch of this.children) ch.render(ctx)
      else this.children.render(ctx)
  }
}

export interface PositionProps {
  x?: number
  y?: number
}

export class Fragment extends ParentElement {
  constructor(props: JSX.BaseProps) {
      super()
      setup(this, props)
  }

  render(ctx: ImageContext): void {
      this.renderChildren(ctx)
  }
}

;(ds as typeof ds)._jsx = (element, props) => {
  if (element === "") element = Fragment

  if (typeof element === "string") throw new Error(`invalid ${element}`)
  // in DeviceScript class ctors can be called with or without new
  else return (element as JSX.FunctionComponent<JSX.BaseProps>)(props)
}