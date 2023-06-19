import React from "react";
import { render } from "@testing-library/react";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";
import { UserMenu } from "@/components/common/navbar/UserMenu";

jest.mock("next-auth/react");

describe("User Menu", () => {
  it("should display sign up and login buttons when user is unauthenticated", async () => {
    const mockSession = {
      data: {
        user: {
          name: "Joe",
          email: "Doe",
          image: null,
        },
        expires: "1234567",
      },
      status: "unauthenticated",
    };

    (useSession as jest.Mock).mockReturnValueOnce(mockSession);
    const { getByTestId } = render(<UserMenu />);

    const navbarBtnsContainer = getByTestId("navbarBtnsContainer");

    expect(navbarBtnsContainer).toBeInTheDocument();
  });

  it("should display user menu when user is authenticated", async () => {
    const mockSession = {
      data: {
        user: {
          name: "Joe",
          email: "Doe",
          image: null,
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        },
        expires: "1234567",
      },
      status: "authenticated",
    };

    (useSession as jest.Mock).mockReturnValue(mockSession);
    const { getByTestId } = render(<UserMenu />);

    const userMenu = getByTestId("helloUser").textContent;

    expect(userMenu).toBe("Hi, Joe!");
  });
});
