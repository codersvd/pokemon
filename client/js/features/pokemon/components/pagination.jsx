import App from '../../../app';
import React, {PropTypes} from 'react';
import {Link} from "react-router-dom";

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pager: {
                currentPage: this.props.currentPage,
                totalPages: null,
                pages: null
            }
        };
    }

    _range(start, end) {
      return [...Array(end - start + 1)].map((_, i) => start + i);
    }

    componentWillMount() {
        let pager = this.getPager(this.props.items.count, this.props.currentPage);
        this.setState({pager: pager});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentPage !== prevProps.currentPage) {
            let pager = this.getPager(this.props.items.count, this.props.currentPage);
            this.setState({pager: pager});
        }
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 20;
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage+4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let pages = this._range(startPage, endPage);
        return {
            currentPage,
            totalPages,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <Link to="/" onClick={() => this.props.onChangePage(1)}>First</Link>
                    </li>
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <Link to="/" onClick={() => this.props.onChangePage(pager.currentPage - 1)}>Previous</Link>
                    </li>
                    {pager.pages.map((p, index) =>
                        <li key={index} className={pager.currentPage === p ? 'active' : ''}>
                            <Link to="/" onClick={() => this.props.onChangePage(p)}>{p}</Link>
                        </li>
                    )}
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <Link to="/" onClick={() => this.props.onChangePage(pager.currentPage + 1)}>Next</Link>
                    </li>
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <Link to="/" onClick={() => this.props.onChangePage(pager.totalPages)}>Last</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;