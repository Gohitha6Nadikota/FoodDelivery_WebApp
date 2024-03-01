import Contact from '../src/Components/Contact';
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";

describe("",()=>{
    test('should load h1', () => { 
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
     });
     test('should load p', () => { 
        render(<Contact/>);
        const heading = screen.getByText("Hello");
        expect(heading).toBeInTheDocument();
     });
});
