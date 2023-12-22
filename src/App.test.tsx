import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Bootstrap App', () => {
    it('renders App component', () => {
        render(<App />)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
})
