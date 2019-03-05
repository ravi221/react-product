import React from 'react';
import './header.css';

const header = (props) => (
	<div className="header">
		<a className="logo">
			<img src="{../assets/images/logo.jpg}" alt="Broad Ridge"></img>
		</a>
		<a className="title">Product Master</a>
		
		<div className="dropdown">
			<button className="dropbtn" onClick={props.clicked}> 
		      <i className="fa fa-bars"></i>
		    </button>
		    {
		    	props.openDropdown ? (
		    		<div className="dropdown-content">
				      <div className="row">
				        <div className="column">
				          <h3>Category 1</h3>
				          <a href="#">Link 1</a>
				          <a href="#">Link 2</a>
				          <a href="#">Link 3</a>
				        </div>
				        <div className="column">
				          <h3>Category 2</h3>
				          <a href="#">Link 1</a>
				          <a href="#">Link 2</a>
				          <a href="#">Link 3</a>
				        </div>
				        <div className="column">
				          <h3>Category 3</h3>
				          <a href="#">Link 1</a>
				          <a href="#">Link 2</a>
				          <a href="#">Link 3</a>
				        </div>
				      </div>
				    </div>
		    	) : ( null )
		    }
			
		</div>
	</div>
)

export default header;