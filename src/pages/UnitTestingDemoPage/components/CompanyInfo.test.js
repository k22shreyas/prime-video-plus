import { screen, render, fireEvent } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

it("has heading level 2 with comapny info text", () =>{
  render(<CompanyInfo />);
  const headingElement = screen.getByText("Company Info");
  expect(headingElement).toBeInTheDocument();
});

it("has company Bosch", () => {
  render(<CompanyInfo />);
  const CompanyNameElement = screen.getByText("Bosch!");
  expect(CompanyNameElement).toBeTruthy();
});

it("has h3 element", () => {
  render(<CompanyInfo foundedYear="2000" />);
  const RoleElement = screen.getByText("Founded year : 2000");
  expect(RoleElement).toBeInTheDocument();
});

it("testing target", () => {
  render(<CompanyInfo/>);
  const CountryInput = screen.getByPlaceholderText("Enter country Name");
  expect(CountryInput.value).toBe("USA");

  const mockEvent = {
    target: {
      value:'UK'
    }
  }
    fireEvent.change(CountryInput, mockEvent);
    expect(CountryInput.value).toBe('UK');
});