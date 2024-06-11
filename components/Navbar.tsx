import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="navbar flex justify-end h-14 p-4">
      <ClerkProvider>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
        </div>
      </ClerkProvider>
    </nav>
  );
}

export default Navbar;
