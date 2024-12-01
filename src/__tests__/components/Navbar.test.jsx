import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/index";
import Navbar from "../../components/Navbar";

console.log(store);

const renderWithRedux = (component, { store } = {}) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Navbar", () => {
  test("renders Navbar component", () => {
    renderWithRedux(<Navbar store={store} />);

    const logo = screen.getByText("LumosBlog");
    expect(logo).toBeInTheDocument();

    const blogLink = screen.getByText("Blog");
    expect(blogLink).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    const newsletterLink = screen.getByText("Newsletter");
    expect(newsletterLink).toBeInTheDocument();
  });

  test("toggles theme button functionality", () => {
    renderWithRedux(<Navbar store={store} />);

    const themeToggleButton = screen.getByRole("button", { name: "bi-circle-fill" });
    expect(themeToggleButton).toBeInTheDocument();

    // Simulasi klik pada tombol tema untuk mengubah ke dark theme
    fireEvent.click(themeToggleButton);
    expect(store.getState().theme.theme).toBe("dark"); // Pastikan ini sesuai dengan logika Anda

    // Simulasi klik pada tombol tema untuk mengubah ke light theme
    const darkThemeButton = screen.getByRole("button", { name: "bi-moon" });
    fireEvent.click(darkThemeButton);
    expect(store.getState().theme.theme).toBe("light"); // Pastikan ini sesuai dengan logika Anda
  });

  test("opens and closes mobile menu", () => {
    renderWithRedux(<Navbar store={store} />);

    const mobileMenuButton = screen.getByRole("button", { name: "bi-list" });
    fireEvent.click(mobileMenuButton);

    const mobileMenu = screen.getByRole("dialog");
    expect(mobileMenu).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "bi-x-lg" });
    fireEvent.click(closeButton);
    expect(mobileMenu).not.toBeInTheDocument();
  });
});