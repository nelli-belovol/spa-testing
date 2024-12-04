import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter was special created for testing 


export const renderWithRouter=(component, options={})=>{
	const Wrapper = ({children})=>(<MemoryRouter {...options}>{children}</MemoryRouter>)

	render(component, {wrapper: Wrapper})
}