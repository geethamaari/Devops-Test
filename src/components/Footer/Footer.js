import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="http://centurylink.com/">CenturyLink</a> &copy; 2018 All Rights Reserved</span>
        <span className="ml-auto">Powered by <a href="https://azure.microsoft.com">Microsoft</a></span>
      </footer>
    )
  }
}

export default Footer;
