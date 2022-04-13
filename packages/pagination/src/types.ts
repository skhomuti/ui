import { LidoComponentProps } from '@lidofinance/utils/dist/esm'

export type SiblingsCount = 0 | 1

export type PaginationProps = LidoComponentProps<
  'div',
  {
    pagesCount: number
    siblingCount?: SiblingsCount
    onItemClick?: () => void
  }
>
