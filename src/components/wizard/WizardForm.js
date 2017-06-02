import React, { Component }    	from 'react';
import PropTypes 							  from 'prop-types';
import { connect }              from 'react-redux';
import {
  fetchSaga,
  saveSelectedSaga
}                               from '../../actions/index';
import { bindActionCreators }   from 'redux';

import WizardFormTradePage               	from './WizardFormTradePage';

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage       = this.nextPage.bind(this)
    this.previousPage   = this.previousPage.bind(this)
    this.showStep       = this.showStep.bind(this)
    this.state = {
      page: 1,
      schemaData: []
    }
  }

  componentWillMount() {
    const { fetchSaga } = this.props;
    this.props.fetchSaga(0);
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps != prevProps) {
      this.setState({schemaData: nextProps.schemaData.saga.schemaData});
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  showStep(page) {
    let page_num = 1;
    const { schemaData } = this.state;
    let schemas = schemaData.episodes;

    if (typeof schemas != "undefined") {
      let formCount = schemas.length;

      let formItem = schemas.map((item) => {
          
          if (page == item['order']) {
            if (page == 1) {
              console.log("first Step")
              return <WizardFormTradePage schemaData={item} nextPage={this.nextPage} currentPage={page}/>  
            }
            else if (page == formCount) {
              console.log("Last Step")
              return <WizardFormTradePage schemaData={item} previousPage={this.previousPage} currentPage={page} />  
            }
            else {
              console.log("middle Step")
              return <WizardFormTradePage schemaData={item} previousPage={this.previousPage} nextPage={this.nextPage} currentPage={page}/>  
            }
          }
        })

      return formItem;
    }

  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    console.log("page num: ", page);
    return (
      <div>
        {this.showStep(page)}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func
}

function mapStateToProps(state) {
    console.log("PropData: ", state);
    return {
      schemaData: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    {
      fetchSaga: (id) => dispatch(fetchSaga(id)),
      saveSelectedSaga: (saga, currentPage) => dispatch(saveSelectedSaga(saga, currentPage))
    }, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm);