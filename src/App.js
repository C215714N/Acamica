import './App.css';
import { Component } from 'react';
import { Nav } from './components/Nav';
import { Form } from './components/Form'
import { Table } from './components/Table';
import Fields from './components/Fields.json'

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
        form: Fields.Login
  }}
  getData = (url, state, field) => {
    let server = `http://localhost:3200/`
    fetch(server + url)
      .then(response => response.json())
      .then(data => { this.setState( { 
        [state]: data || this.state[state], 
        userData: data,
        form: field
      } )
  } ) }

  render(){
  // "render()" va a crear un componente.
    return(
      <> {/*React fragment*/}
      <Nav 
        id={ this.state.userId } 
        action={ this.getData }
        links = { this.state.links } />
      <Form data={ this.state.form } />
      <Table data={ this.state.userData } />
      </>
    )}

}
export default App;
