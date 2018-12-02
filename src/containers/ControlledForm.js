import React, {Component} from 'react';

class ControlledForm extends Component {

    state = {
        value: ''
    }

handleTextChange = (e) => {
    this.setState({
        value: e.target.value
    });
}

resetTextArea = () => {
    this.setState({
       value: ''
    });
}

    render() {
      const {start, checkMatch, completed, partialMatch, error} = this.props;
      const style = completed ? {border: '10px solid #34A853'} : partialMatch ? {border: '10px solid #4584EF'} : error ? {border: '10px solid #EA4335'} : null;

       return(
        <div className='textAreaContainer'>
            <textarea
                style={style}
                value={this.state.value}
                onChange={this.handleTextChange}
                placeholder='The clock start when you start typing.'
                onKeyPress={start}
                onKeyUp={checkMatch}
           ></textarea>
           <button onClick={this.resetTextArea}>Start Over</button>
        </div>
    );

    }
}

export default ControlledForm;
