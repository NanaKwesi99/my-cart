import React from 'react';

const Size = () => {
    return (
        <div>
            <div className="container">
	<div className="row">
		<div className="col-md-2">
			<div className="row">
				<div className="col-md-3 size">XS</div>
				<div className="col-md-3 size">S</div>
				<div className="col-md-3 size">M</div>
				<div className="col-md-3 size">ML</div>
			</div>
			<div className="row">
				<div className="col-md-3 size">L</div>
				<div className="col-md-3 size">XL</div>
				<div className="col-md-3 size">XS</div>
				<div className="col-md-3 size">XXL</div>
			</div>
			<p>Leave a star on the Github if this repository<br /> was useful :)</p>

			<button type="button" className="btn btn-default btn-lg star">
				<span className="glyphicon glyphicon-star" aria-hidden="true"></span>Star
			</button>848
		</div>		
		</div>
        </div>
        </div>
    );
}

export default Size;