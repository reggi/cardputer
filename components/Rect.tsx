import { ImageContext, PositionElement, PositionProps, setup } from "./core"

export class Rect extends PositionElement {
  width: number
  height: number

  constructor(public props: PositionProps & { width: number; height: number, padding?: number }) {
      super()
      setup(this, props)
  }

  render(ctx: ImageContext): void {
      const x = (this.x ?? 0) + (this.props.padding ?? 0)
      const y = (this.y ?? 0) + (this.props.padding ?? 0)
      const w = this.width - (this.props.padding ?? 0)
      const h = this.height - (this.props.padding ?? 0)
      ctx.strokeRect(x, y, w, h)
  }
}