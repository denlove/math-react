import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: BrowserRouter }),
    }
}

describe('Bootstrap App', () => {
    it('renders App component', () => {
        renderWithRouter(<App />)
        expect(screen.getByText(/Home/)).toBeInTheDocument()
    }),
        it('navigates between pages with right route', async () => {
            const { user } = renderWithRouter(<App />)
            await user.click(screen.getByText(/about/))
            expect(screen.getByText(/About/)).toBeInTheDocument()
        }),
        it('navigates to NotFound page when wrong route', () => {
            const badRoute = '/not-found-route'
            renderWithRouter(<App />, { route: badRoute })
            expect(screen.getByText(/not found/i)).toBeInTheDocument()
        })
})
