import React,{Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots : [],
            searchfield : ''    

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json()
        })
        .then(users => {
            this.setState({robots:robots});
        })
       
        console.log('constructor')
    }

    onsearch = (event) => {
       this.setState({searchfield: event.target.value})
        // console.log(filterrobo);
    }

    render(){
        const filterrobo=this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(robots.length===0 ){
            return <h1> Loading .... </h1>
        }

        else
        return(
            <div className='tc'>
                <h1 className= 'tc grow f2' > ROBO TRACKER</h1>
                <SearchBox searchChange={this.onsearch}/>
                <Scroll>
                <ErrorBoundry>
                <CardList robots={filterrobo}/>
                </ErrorBoundry>
                </Scroll>
            </div>
        )

    }
    
}

export default App