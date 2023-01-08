import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const explicacion = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'

	// element: {store.demo[params.theid].title}
	return (
		<div className="text-center mt-5">
			{/*card de bootstrap*/}
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img className="img-fluid rounded-start imageSingle" src="https://bordalo.observador.pt/v2/rs:fill:900/c:770:433:nowe:0:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2015/12/star-wars-alternate-ending-vader-father-yoda_770x433_acf_cropped.jpg" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body cardBodySingle">
							<h3 className="card-title">Card title</h3>
							<p className="card-text">{explicacion}</p>
						</div>
					</div>

					<div className='singleFooter'>
						<ul className='footerList'>
							<li>Name {}</li>
							<li>Birth Year {}</li>
							<li>Gender {}</li>
							<li>Heigth {}</li>
							<li>Skin Color {}</li>
							<li>Eye Color {}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};