"use client";
import Link from 'next/link';
import React from 'react'

const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav




