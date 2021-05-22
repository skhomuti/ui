import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum PopoverOffset {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type PopoverOffsets = keyof typeof PopoverOffset

export enum PopoverPlacement {
  topLeft,
  top,
  topRight,

  rightTop,
  right,
  rightBottom,

  bottomLeft,
  bottom,
  bottomRight,

  leftTop,
  left,
  leftBottom,
}
export type PopoverPlacements = keyof typeof PopoverPlacement

export type PopoverRootProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: React.RefObject<HTMLDivElement>
    anchorRef: React.RefObject<HTMLElement | null>
    placement?: PopoverPlacements
    backdrop?: boolean
    onClose?: () => void
  }
>

export type PopoverProps = {
  offset?: PopoverOffsets
} & PopoverRootProps
