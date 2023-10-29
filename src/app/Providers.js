"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthprovider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
