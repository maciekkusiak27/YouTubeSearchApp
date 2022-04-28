import React from 'react';

class Search extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <div className='search'>
                <form onSubmit={this.handleSubmit} className='form'>
                    
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="wpisz coś.."/>
                        <button onClick={this.handleSubmit}>szukaj</button>
                </form>
            </div>
        )
    }
}
export default Search;