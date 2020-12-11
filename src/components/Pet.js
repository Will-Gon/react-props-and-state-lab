import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isAdopted: props.data.isAdopted
    }
  }

  changeAdoptedStatus = () => {
    this.props.onAdoptPet(this.props.data.id)
    this.setState({
      isAdopted: true
    })
  }

  renderAdoptedButton = () => {
    if (this.state.isAdopted) {
      return ( <div className="extra content">
        <button className="ui primary button">Already adopted</button>
        <button className="ui disabled button">Adopt pet</button>
      </div> )
    }
    else {

      return ( <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button" onClick={this.changeAdoptedStatus}>Adopt pet</button>
      </div> )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.data.gender === 'female' ? '♀' : '♂'}
            {this.props.data.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        {this.renderAdoptedButton()}
      </div>
    )
  }
}

export default Pet
