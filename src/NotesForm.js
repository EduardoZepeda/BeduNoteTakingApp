import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const NotesForm = (props) => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <TextField type='text' name="title" value={props.title} onChange = {props.updateValue} label='Title' margin='normal' fullWidth/>
      </Grid>
      <Grid item xs={12}>
        <TextField multiline rows='4' name="description" value={props.description} onChange = {props.updateValue} margin='normal'fullWidth placeholder='Start taking some notes from your heart...'/>
      </Grid>
      <Fab color='secondary' className='editIcon' onClick={props.saveNote}>
        <Icon>edit_icon</Icon>
      </Fab>
    </Fragment>
  )
}

export default NotesForm
