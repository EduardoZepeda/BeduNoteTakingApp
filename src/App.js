import React, {Fragment, Component} from 'react';
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
import {Link, Route, Redirect} from 'react-router-dom'
//3rd
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      notes: []
    }
  }

  componentDidMount(){
    axios.get('./notes.json').then(response=> {
      if(response.data && response.status ===200){
        this.setState({notes: response.data})
      }
    }).catch(err => console.log(err))
  }

  updateValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState((state) => {
        return {
          title: '',
          description: '',
          notes: [
            ...state.notes, {
              title: state.title,
              description: state.description,
              id: Date.now()
            }
          ]
        }

      })
    }
  }

  deleteNote = id => {
    var filteredNotes = this.state.notes.filter((note)=>note.id !== id)
    this.setState((state)=>{
      return {
        title: '',
        description: '',
        notes: [
          ...filteredNotes
        ]
      }
    })
  }

  render() {
    return (< Fragment > <Typography align = "center" variant = "h2" gutterBottom > Hello World < /Typography>
        < Grid container justify='center' spacing={ 2 }>
            < Grid item xs={ 4 }>
              <NotesList notes={this.state.notes} deleteNote={this.deleteNote}/ > < /Grid>
            < Grid item xs={ 8 }>
              <Route exact path='/' component={ Home }/>
      <Route exact path = '/add' render = {
      () => (<NotesForm saveNote={this.saveNote} updateValue={this.updateValue} title={this.state.title} description={this.state.description}/>)
    } />
      <Route path='/view/:id' render={props => {
      const note = this.state.notes.filter(note=>{
        return note.id === parseInt(props.match.params.id)
      })[0]
      if(!note){
        return <Redirect to='/'/>
      }
      return <Note note={note}/>}}/> </Grid>
        </Grid > <Link to='/add'>
      <Fab color="primary" className='addIcon'>
        <AddIcon/>
      </Fab>
    </Link> < /Fragment>
    )
  }
}

export default App;
