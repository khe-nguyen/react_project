"use client";
import React from "react";
import Counter from "../components/Counter";
import "./globals.css";

export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <h1>Next.js Button Counter</h1>
        <p className="muted">A small accessible counter demo</p>
      </header>

      <section className="grid">
        <div className="card">
          <h2>Default Counter</h2>
          <Counter />
        </div>

        <div className="card">
          <h2>Custom Counter</h2>
          <Counter initialCount={5} initialStep={2} />
        </div>
      </section>
    </main>
  );
}