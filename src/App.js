import React from 'react';
import { connect } from 'react-redux';
import { addToDo, removeToDo, updateToDo } from './actions/todoActions';
import './App.css';
import { TodoCard } from './todo/cardComponent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FormDialog from './todo/formDialog';
import * as PropTypes from 'prop-types';
import TodoFormikForm from './formikForms/formikForm';
import FormikFormMUI from './formikForms/formikFormMui';
import ReminderReduxForm from './reduxForms/reduxForm';
import ReminderReduxFormMUI from './reduxForms/reduxFormMui';
import ReachHooksForm from './reactHooksForm/reactHookForm';
import ReachHooksFormMUI from './reactHooksForm/reactHookFormsMUI';


function FloatingButton({color, action, label, identifier}) {
  const handleClose = () => action(identifier);
  return <Fab color={color} onClick={handleClose}>
    {label}
  </Fab>;
}

FloatingButton.propTypes = {
  action: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
  identifier: PropTypes.string
};

class App extends React.Component {
  componentDidMount() {
    this.props.addToDo({description: 'Drink water', completed: false});
  }

  state = {
    openFormik: false,
    openFormikMui: false,
    openRF: false,
    openRFMui: false,
    openRHF: false,
    openRHFMui: false
  };

  handleClose = (key) => {
    this.setState({[key]: false});
  };

  openDialog = (key) => {
    this.setState({[key]: true});
  };

  render() {
    const listofTodos = this.props.todos.length ? this.props.todos.map((todo, index) => (
      <TodoCard key={index} values={todo} doneAction={this.props.removeToDo}/>
    )) : (<Typography color="textPrimary" gutterBottom variant='h3'>
      You are all caught up <span role='img' aria-label='smiley face'>😄</span>
    </Typography>);
    return (
      <>
        <div className="App">
          <div className="App-container">
            {listofTodos}
          </div>
          <div className='App-container-button--Create'>
            <FloatingButton action={this.openDialog} label={'FK'} color={'primary'} identifier={'openFormik'}/>
            <FloatingButton action={this.openDialog} label={'FKM'} color={'secondary'} identifier={'openFormikMui'}/>
            <FloatingButton action={this.openDialog} label={'RF'} color={'primary'} identifier={'openRF'}/>
            <FloatingButton action={this.openDialog} label={'RFM'} color={'secondary'} identifier={'openRFMui'}/>
            <FloatingButton action={this.openDialog} label={'RHF'} color={'primary'} identifier={'openRHF'}/>
            <FloatingButton action={this.openDialog} label={'RHFM'} color={'secondary'} identifier={'openRHFMui'}/>
          </div>
        </div>
        <FormDialog open={this.state.openFormik} onClose={this.handleClose} identifier={'openFormik'}>
          <TodoFormikForm submitAction={this.props.addToDo}/>
        </FormDialog>

        <FormDialog open={this.state.openFormikMui} onClose={this.handleClose} identifier={'openFormikMui'}>
          <FormikFormMUI submitAction={this.props.addToDo}/>
        </FormDialog>

        <FormDialog open={this.state.openRF} onClose={this.handleClose} identifier={'openRF'}>
          <ReminderReduxForm onSubmit={this.props.addToDo}/>
        </FormDialog>

        <FormDialog open={this.state.openRFMui} onClose={this.handleClose} identifier={'openRFMui'}>
          <ReminderReduxFormMUI onSubmit={this.props.addToDo}/>
        </FormDialog>

        <FormDialog open={this.state.openRHF} onClose={this.handleClose} identifier={'openRHF'}>
          <ReachHooksForm onSubmit={this.props.addToDo}/>
        </FormDialog>
        <FormDialog open={this.state.openRHFMui} onClose={this.handleClose} identifier={'openRHFMui'}>
          <ReachHooksFormMUI onSubmit={this.props.addToDo}/>
        </FormDialog>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {addToDo, removeToDo, updateToDo};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
