import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import github_logo from'./github-logo.svg'

const Header = ({ siteTitle }) => (
  <div class="header-nav">
    <div class="container centered">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <input type="text" class="search-bar" placeholder="Search Movies"/>
      <img class="header-github-logo" src={github_logo} alt="Fork me on GitHub"/>
    </div>
  </div>
)

export default Header
