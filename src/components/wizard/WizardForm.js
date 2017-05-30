import React, { Component, PropTypes }    	from 'react';
import WizardFormFirstPage                	from './WizardFormFirstPage';
import WizardFormTradePage               	from './WizardFormTradePage';
import WizardFormDescriptionPage            from './WizardFormDescriptionPage';
import WizardFormBudgetPage               	from './WizardFormBudgetPage';
import WizardFormImagePage               	from './WizardFormImagePage';
import WizardFormStatusPage               	from './WizardFormStatusPage';
import WizardFormContactDetailPage         	from './WizardFormContactDetailPage';
import WizardFormVerifyMobilePage          	from './WizardFormVerifyMobilePage';
// import WizardFormTradePage               	from './WizardFormTradePage';

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage       = this.nextPage.bind(this)
    this.previousPage   = this.previousPage.bind(this)
    this.showStep       = this.showStep.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  showStep() {
    switch(this.state.page) {
      case 1:
        return <WizardFormFirstPage nextPage={this.nextPage}/>
      case 2:
        return <WizardFormTradePage nextPage={this.nextPage}/>
      case 3:
        return <WizardFormDescriptionPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 4:
        return <WizardFormBudgetPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 5:
        return <WizardFormStatusPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 6:
        return <WizardFormContactDetailPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 7:
        return <WizardFormVerifyMobilePage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 8:
        return <WizardFormImagePage previousPage={this.previousPage} nextPage={this.nextPage} />
    }
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {this.showStep()}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func
}

export default WizardForm