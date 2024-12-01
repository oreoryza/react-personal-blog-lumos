import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../../pages/About";

describe("About", () => {
  test("renders About component", () => {
    render(<About />);
    
    const aboutMeHeading = screen.getByText("About Me");
    expect(aboutMeHeading).toBeInTheDocument();

    const skillsHeading = screen.getByText("Skills:");
    expect(skillsHeading).toBeInTheDocument();

    const experienceHeading = screen.getByText("Experience:");
    expect(experienceHeading).toBeInTheDocument();

    const educationHeading = screen.getByText("Education:");
    expect(educationHeading).toBeInTheDocument();
  });

  test("renders skills list", () => {
    render(<About />);
    
    const skillItems = screen.getAllByRole("listitem");
    expect(skillItems.length).toBeGreaterThan(0);
  });
});