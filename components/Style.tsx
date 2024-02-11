import { ImageContext, ParentElement, setup } from "./core"

export class Style extends ParentElement {
  strokeColor: number
  fillColor: number
  constructor(
      props: {
          strokeColor?: number
          fillColor?: number
      } & JSX.BaseProps
  ) {
      super()
      setup(this, props)
  }

  render(ctx: ImageContext): void {
      ctx.save()
      if (this.strokeColor !== undefined) ctx.strokeColor = this.strokeColor
      if (this.fillColor !== undefined) ctx.fillColor = this.fillColor
      this.renderChildren(ctx)
      ctx.restore()
  }
}

