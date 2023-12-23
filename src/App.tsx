import styled from 'styled-components'
import Theme from './styles/themes/Theme'
import GlobalStyles from './styles/index.styled'
import { useState } from 'react'
import { ITheme, theme } from './styles/themes/theme'

const StyledApp = styled.div`
    color: hsl(0, 0%, 10%);
    background-color: ${({ theme }) => theme.backgroundColor};
`

const App = () => {
    const [currentTheme, setCurrentTheme] = useState<string>('dark')

    return (
        <>
            <GlobalStyles />
            <Theme theme={theme[currentTheme as keyof ITheme]}>
                <StyledApp className="App">
                    <h1>Hello</h1>
                    <button
                        onClick={() =>
                            setCurrentTheme(prev =>
                                prev === 'light' ? 'dark' : 'light',
                            )
                        }
                    >
                        Switch theme
                    </button>
                </StyledApp>
            </Theme>
        </>
    )
}

export default App
