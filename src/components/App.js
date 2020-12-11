import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import { getAll } from '../data/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {type: type}
    })
  }

  onFindPetsClick = () => {
    // return getAll.filter(pet => pet.type === this.state.filters.type)
    let url
    if (this.state.filters.type === 'all') {
      url = '/api/pets'
    }
    else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })

  }

  onAdoptPet = (id) => {
    const pet = this.state.pets.filter(pet => pet.id === id)
    console.log(pet)
    pet[0].isAdopted = true
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
