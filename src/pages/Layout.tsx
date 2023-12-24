import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Main } from '../wrappers/Main'
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'
import Theme from '../styles/themes/Theme'
import { ITheme, theme } from '../styles/themes/theme'
import GlobalStyles from '../styles/index.styled'

const Layout = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentTheme, setCurrentTheme] = useState<string>('dark')

    return (
        <>
            <GlobalStyles />
            <Theme theme={theme[currentTheme as keyof ITheme]}>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Theme>
        </>
    )
}

export default Layout
