export function ProgressBar(props: {
  x?: number
  y?: number
  width: number
  height: number
  value: number
  showPercent?: boolean
}): JSX.Element {
  const { x, y, width, height, value, showPercent } = props
  const w = Math.round((width - 4) * value)
  const fc = value > 0.5 ? 0 : 1
  return (
      <Translate x={x} y={y}>
          <Rect width={width} height={height} padding={5}></Rect>
          <FillRect x={2} y={2} width={w} height={height - 4}></FillRect>
          {!!showPercent && (
              <Style fillColor={fc}>
                  <Text x={width >> 1} y={2}>
                      {Math.round(value * 100) + "%"}
                  </Text>
              </Style>
          )}
      </Translate>
  )
}