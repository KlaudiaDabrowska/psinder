import { FormError } from "@/components/forms/FormError";
import { render } from "@testing-library/react";

it("should display appropriate error message", () => {
  const { getByTestId } = render(<FormError error="Required" />);

  const errorMessage = getByTestId("errorMessage").textContent;

  expect(errorMessage).toBe("Required");
});
