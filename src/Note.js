import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Note = props => {
  const note = props.notes.filter(note=>{
    return note.id === parseInt(props.match.params.id)
  })[0]
  return (
    <Fragment>
      <Typography align="center" variant="h4" gutterBottom>
        {note.title}
      </Typography>
      <Typography align="justify" variant="subtitle1" gutterBottom>
        {note.description}
      </Typography>
    </Fragment>
  )
}

export default Note
