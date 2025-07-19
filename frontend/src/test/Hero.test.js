//testing projects functions using JEST scripts
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";

// Test Suite
describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImages = screen.getAllByAltText("Hero-img");
    });
});
