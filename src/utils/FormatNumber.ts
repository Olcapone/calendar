import { replace } from 'lodash'
import numeral from 'numeral'

export const fCurrency = (number: any) => numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00')

export const fPercent = (number: number) => numeral(number / 100).format('0.0%')

export const fNumber = (number: string) => numeral(number).format()

export const fShortenNumber = (number: any) => replace(numeral(number).format('0.00a'), '.00', '')

export const fData = (number: any) => numeral(number).format('0.0 b')