import { font8, scaledFont } from "@devicescript/graphics"
import { ImageContext, PositionElement, PositionProps, setup } from "./core"

export class Text extends PositionElement {
  children: string

  constructor(public props: PositionProps & { fontScale?: number, children: string }) {
      super()
      setup(this, props)
  }

  render(ctx: ImageContext): void {
      ctx.font = scaledFont(font8(), this.props.fontScale ?? 1)
      ctx.fillText(this.children, this.x ?? 0, this.y ?? 0)
  }
}