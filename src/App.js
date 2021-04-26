import './App.css';
import Fields from './components/Fields.json'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Component } from 'react';
import { Nav } from './components/Nav';
import { Form } from './components/Form'
import { Table } from './components/Table';
import { Location } from './components/Location';
class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        userId: 1,
        userData: [],
        links: [
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
        ],
        form: Fields.Contact,
        selection: []
  } }
  getData = (url, state, field) => {
    let server = `http://localhost:3200/`
    fetch(server + url)
      .then(response => response.json())
      .then(data => { this.setState( { 
        [state]:  data || this.state[state], 
        userData: data || this.state[state],
        form:    field ? field : this.state.userId ? Fields.Contact : Fields.Login
      } ); console.log(this.state[state])
  } ) }
  dataSelect = (type, data) => { type ? this.setState( { selection: this.state.selection.push(data)} ) : this.setState( { selection: this.removeItem(this.state.selection, data) } ) }
  removeItem = ( arr, item, i ) => { i = arr.indexOf( item ); arr.splice( i, 1 ) }
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <main>
              <Form data={ Fields.Login } cancel="Registrarse" success="Iniciar Sesion" />
            </main>
          </Route>
          <Route exact path="/register">
            <main>
              <Form title={'Registro de Usuario'} data={ Fields.User } />
            </main>
          </Route>
          <Route exact path="/home">
            <>
              <Nav id={ this.state.userId } action={ this.getData } links = { this.state.links } />
              <main>
                <Form class={'form'} data={ this.state.form }/>
                <Table data={ this.state.userData } />
              </main>
            </>
          </Route>
        </Switch>
      </Router>
    )}
}
export default App;