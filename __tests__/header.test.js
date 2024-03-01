import Header from '../src/Components/Header';
import { screen,render, fireEvent } from '@testing-library/react';
import appStore from '../src/Utils/appStore';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
it("should Login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    );
    const loginbutton = screen.getByRole("button",{name:'Login'});
    expect(loginbutton).toBeInTheDocument();
});

it("should Login change from Login to Logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginbutton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);
    const logoutbutton=screen.getByRole("button",{name:"Logout"});
    expect(logoutbutton).toBeInTheDocument();
});

it("should show cart items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const carttext=screen.getByText("Cart");
    expect(carttext).toBeInTheDocument();
});