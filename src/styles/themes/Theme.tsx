import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface IThemeConf {
    children: ReactNode
    theme: any
}

const Theme = ({ children, theme }: IThemeConf) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
