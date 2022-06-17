import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { App } from './App';


describe('App tests', () => {
    it('renders without crashing', () => {
       render(<App />);
       expect(screen.getByAltText("logo")).toBeInTheDocument()
    });
})