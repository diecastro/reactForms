import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxHeight: 160
  },
  title: {
    fontSize: 14,
    paddingBottom: 20
  },
});

export const TodoCard = ({values, doneAction}) => {
  const classes = useStyles();
  const doneActionClick = () => doneAction(values.id);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Please remember to
        </Typography>
        <Typography variant="h5" component="h2">
          {values.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={doneActionClick}>Mark as done</Button>
      </CardActions>
    </Card>
  );
};
