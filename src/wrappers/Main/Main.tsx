import { IChildren } from '../../types/interfaces'
import { StyledMain } from './Main.styled'

const Main = ({ children }: IChildren) => {
    return <StyledMain>{children}</StyledMain>
}

export default Main
