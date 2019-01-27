import React from 'react'
import {Link} from 'gatsby'
import github_logo from './github-logo.svg'
import Styles from './styles.module.scss';
import Container from '../container';

const Header = ({siteTitle}) => (
  <div className={Styles.headerNav}>
    <Container >
      <div className={ Styles.centered }>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <input type="text" className={Styles.searchBar} placeholder="Search Movies"/>
        <a href="https://github.com/haxzie/awesome-movies-for-geeks">
          <img
            className={Styles.headerGithubLogo}
            src={github_logo}
            alt="Fork me on GitHub"/>
        </a>
      </div>
    </Container>
  </div>
)

export default Header
