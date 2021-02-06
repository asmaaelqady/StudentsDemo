import { Component } from 'react';

export default class Search extends Component {
    constructor() {
        super()
        //intial state
        this.state = {
            keywords: ""
        }
    }

    keywordsChanged = (e) => {
        console.log(this.props)
        this.props.onKeywordsChange(e.target.value)
        this.setState({ keywords: e.target.value })
    }
    render() {

        return (
            <div>
            <div className="input-group  search-comp mb-4" >
                <input type="text" placeholder="Search by name" className="form-control"
                    value={this.state.keywords}
                    onChange={this.keywordsChanged}
                />
              
            </div>
            </div>
            
        )
}}