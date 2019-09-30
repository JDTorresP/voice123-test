import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
const theme = createMuiTheme();

export default class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0,
        currentPage:1 };
      }
    
      handleClick(offset) {
        this.setState({ offset });
      }
      handleChangePage(page){
       

      }
  
  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => {
            this.handleClick(offset);
            this.props.changePage(e.target.textContent);
        }}
        />
      </MuiThemeProvider>
    )
  }
}
