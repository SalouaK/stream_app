import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}



export default connect(
  null,
  { createStream }
)(StreamCreate);

/* 
With hooks :
import { React } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

const renderError = ({ error, touched}) => {
    if (touched && error) {
        return (
            <div className='ui error message'>
                <div className='header'>{error}</div>
            </div>
        )
    }
}
const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete='off' />
            {renderError(meta)}
        </div>
    );
}
const StreamCreate = (props) => {
    
    const onSubmit = formValues => {
        props.createStream(formValues);
    }
    return (
        <form onSubmit={props.handleSubmit(onSubmit)} 
        className="ui form error"
        >
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="description" component={renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.title= 'You must enter a title';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};


const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect (null, { createStream })(formWrapped);
*/