import './App.css'
import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Fields from './components/Fields.json'

import { Nav } from './components/Nav'
import { Form } from './components/forms/Form'
import { Search } from './components/tables/Search'

let title = 'Data Warehouse'
let server = `http://localhost:3200/`
let links = [
  { url: 'contact',
    form: Fields.Contact,
    text: 'Contactos'}, 
  { url: 'company',
    form: Fields.Company,
    text:'Compañías'}, 
  { url: 'user',
    form: Fields.User,
    text:'Usuarios'},
  { url: 'region',
    form: Fields.Region,
    text:'Región/Ciudad'}
  ]

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userId: 1,
      userData: [],
      form: Fields.Contact,
      selection: []
  } }
  getData = (url, state, field) => {
    fetch(server + url)
      .then(response => response.json())
      .then(data => { this.setState( { 
        userData: data || this.state[state],
        [state]:  data || this.state[state], 
        form: field || Fields.Contact
  } ) } ) }
  dataSelect = (type, data) => { 
    type ? this.setState( { selection: [ ...this.state.selection, data ] } ) : 
    this.setState( { selection: this.removeItem(this.state.selection, data) } )
    }
  removeItem = ( arr, item, i ) => i = arr.indexOf( item ) && arr.splice( i, 1 )
  
  render(){
    return( 
      <Router>
        <Nav id={ this.state.userId } title={ title } action={ this.getData } links={ links } />
        <main>
          <Switch>
            <Route exact path="/">
              <Form data={ Fields.Login } action={ Fields.Login.action } />
            </Route>
            <Route default>
              { this.state.userId ? <Search data={ this.state } action={ this.dataSelect} /> : <Redirect to="/" /> } 
            </Route>
          </Switch>
        </main>
      </Router>
    )}
}
export default App;