import React from 'react';

class AddContact extends React.Component {
    state = {
        name: '',
        email: ''
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert('All the Fields are mandatory');
            return;
        }
        this.props.addContacthandler(this.state);
        this.setState({name: '', email: ''});
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <h2>Add contact</h2>
                <form className='form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter name' 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Enter email'
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
 export default AddContact;