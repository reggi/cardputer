import { ImageContext, ParentElement, PositionProps, setup } from "./core"

export class Translate extends ParentElement {
  x: number
  y: number

  constructor(props: PositionProps & JSX.BaseProps) {
      super()
      setup(this, props)
  }

  render(ctx: ImageContext): void {
      if (this.x || this.y) {
          ctx.save()
          ctx.translate(this.x ?? 0, this.y ?? 0)
          this.renderChildren(ctx)
          ctx.restore()
      } else this.renderChildren(ctx)
  }
}
