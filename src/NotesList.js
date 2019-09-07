import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const NotesList = (props) => {
  const listItems = props.notes.map((element, index)=>{
    return(
      <ListItem button key={index}>
        <ListItemText primary = {element.title} secondary={moment(element.id).format('MMM Do YY')}/>
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
