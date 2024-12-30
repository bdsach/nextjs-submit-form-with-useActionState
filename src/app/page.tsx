import React from "react";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <ul>
        <li>
          <NextLink href="/create">Create User</NextLink>
        </li>
        <li>
          <NextLink href="/update">Update User</NextLink>
        </li>
      </ul>
    </main>
  );
}
