import Post from './Post'
import {screen, render} from '@testing-library/react'

describe('Simple working test', () => {
    it('the title is visible', () => {
        render(<Post/>)
        expect(screen.getByText(/Hello/)).toBeDefined()
    });
});