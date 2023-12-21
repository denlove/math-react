import { dark } from './dark/dark'
import { light } from './light/light'

type ThemeType = typeof light

export interface ITheme {
    light?: ThemeType
    dark?: ThemeType
}

export const theme = {
    light,
    dark,
}
