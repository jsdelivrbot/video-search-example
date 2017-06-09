import React, {Component} from 'react';
import _ from  'lodash';

export default class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			term:''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(val) {
		this.setState({
			term: val
		});
		this.props.onSearchTermChange(val);
	}

	render() {
		const onInputChange = _.debounce(term => {this.onInputChange(term)}, 300);
		return (
			<div className="search col-md-8">
				<h1>Search {this.state.term} </h1>
				<input onChange={e => onInputChange(e.target.value)} />
			</div>
			
			) ;
	}
}