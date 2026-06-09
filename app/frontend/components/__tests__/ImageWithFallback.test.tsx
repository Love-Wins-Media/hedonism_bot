import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ImageWithFallback } from "../controls/ImageWithFallback";

describe("ImageWithFallback Component", () => {
  it("renders image correctly", () => {
    render(<ImageWithFallback src="test.jpg" alt="test image" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "test.jpg");
  });
});
