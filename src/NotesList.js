import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'

const NotesList = (props) => {
  const listItems = props.notes.map((note, index)=>{
    //En lugar de usar Link, usamos component y Links como atributos, lo anterior para preservar el estilo
    //Esta funcion es exclusiva de Material-ui
    return(
      <ListItem button key={index} to={`/view/${note.id}`} component={ Link }>
        <ListItemText primary = {note.title} secondary={moment(note.id).format('MMM Do YY')}/>
        <ListItemSecondaryAction>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  })
  return props.notes.length? (
    <List>
      {listItems}
    </List>
  ): (<Typography align='center' variant='h4'>No notes yet...</Typography>)
}

export default NotesList
