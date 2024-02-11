import { ImageContext } from '@devicescript/graphics'
import { Rect } from './Rect'

export class FillRect extends Rect {
  override render(ctx: ImageContext): void {
      ctx.fillRect(this.x ?? 0, this.y ?? 0, this.width, this.height)
  }
}
