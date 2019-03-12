import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';
import Image from './Image';
import './Image.css';


class App extends React.Component {

    state = { images: [] }



    handleSearchBarInput = async (term) => {
        // console.log("From App: " + term)
        var response = await axios.get('https://api.unsplash.com/search/photos/', {
            params: { query: term },
            headers:
            {
                Authorization: 'Client-ID 5091f4b047af903d52662e847073ebad93e1db88e12030eb0b1ab957725d9086',
            }
        });
        console.log(response.data.results)
        this.setState({ images: response.data.results })
    };

    render() {
        return (
            <div className="container">
                <SearchBar onSubmitBackToApp={this.handleSearchBarInput} />
                Total pics found: {this.state.images.length}
                <div className="container">
                    <div className="row">
                        <div className="card-column">
                            
                                <Image imageArray={this.state.images} />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;