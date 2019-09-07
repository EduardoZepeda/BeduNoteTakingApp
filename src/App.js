import React, { Fragment, Component} from 'react';
//material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//
import NotesForm from './NotesForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      notes: []
    }
  }

  updateValue = event => {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state)
  }

  render(){
    return (
       <Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          Hello World
        </Typography>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8}>
            <NotesForm updateValue={this.updateValue} title = {this.state.title} description= {this.state.description}/>
          </Grid>
        </Grid>
        <Fab color="primary" className='addIcon'>
          <AddIcon />
        </Fab>
       </Fragment>
    )
  }
}

export default App;
