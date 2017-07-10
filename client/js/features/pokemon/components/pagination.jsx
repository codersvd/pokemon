import App from '../../../app';
import React from 'react';
import {Link} from "react-router-dom";


function range(start, count) {
  return Array.apply(0, Array(count))
    .map(function (element, index) {
      return index + start;
    });
}



class Pagination extends React.Component {
  constructor(props){
    super(props);
    this.state = { pager: {
      count: this.props.items.count,
      currentPage: 1,
      itemsOnPage: 20,
      pagesShow: 5
    }};

    this.NextChangePage = this.NextChangePage.bind(this);
  }



  NextChangePage(){
    this.setState({pager: {currentPage: this.states.pager.currentPage+1}});
    this.props.onChangePage(this.states.pager.currentPage);
    console.log(this.states.pager);
  }

  render() {
    let pager = this.state.pager;
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <Link to={`/?page=${pager.currentPage}`} >First</Link>
          </li>
          <li className={pager.currentPage === 1 ? 'disabled' : ''}>
            <Link to={`/?page=${pager.currentPage-1}`} >Prev</Link>
          </li>
          <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
            <Link to={`/?page=${pager.currentPage+1}`}>Next</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;