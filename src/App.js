import React, { Fragment, Component } from 'react';
//material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Notes component
import NotesForm from './NotesForm'
import NotesList from './NotesList'
import Home from './Home'
import Note from './Note'
//React Router
import { Link, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      notes: []
    }
  }

  updateValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState({
        title: '',
        description: '',
        notes: [...this.state.notes, {
          title: this.state.title,
          description: this.state.description,
          id: Date.now()
        }]
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      < Fragment>
        < Typography align="center" variant="h2" gutterBottom>
          Hello World
        < /Typography>
        < Grid container justify='center' spacing={ 2 }>
            < Grid item xs={ 4 }>
              <NotesList notes={this.state.notes}/>
            < /Grid>
            < Grid item xs={ 8 }>
              <Route exact path='/' component={ Home }/>
              <Route exact path='/add' render= { () => (
                <NotesForm
                  saveNote={ this.saveNote }
                  updateValue={ this.updateValue }
                  title={ this.state.title }
                  description={ this.state.description } />)}
              />
              <Route path='/view/:id' render={props=> <Note {...props} notes={this.state.notes}/>}/>
            < / Grid>
        < /Grid>
        <Link to='/add'>
          < Fab color="primary" className='addIcon'>
              <AddIcon />
          </Fab>
        </Link>
      < /Fragment>
    )
  }
}

export default App;
