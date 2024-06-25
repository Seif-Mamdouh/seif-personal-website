"use client";
import Link from 'next/link';
import React from 'react'

const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/seif-mamdouh/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com/seif-mamdouh">Github</Link>
          </li>
          <li>
            <Link href="https://medium.com/@seifmamdouh7878">Medium</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav




