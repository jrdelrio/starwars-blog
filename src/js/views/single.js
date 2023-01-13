import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [ features, setFeatures ] = useState(props.info6);

	// console.log(features)
	useEffect(()=>{
		// console.log(features)
		}, [features])

	const explicacion = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem s\
	accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis s\
	et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur s\
	aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro s\
	quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi s\
	tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum s\
	exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure.'

	if (features == undefined){
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

							</ul>
						</div>
					</div>
				</div>
			</div>
		)} else {
			return (
				<div className="text-center mt-5">Loading...</div>
			)
		}
};

Single.propTypes = {
	match: PropTypes.object
};

{/*<li>Name {}</li>
<li>Birth Year {}</li>
<li>Gender {}</li>
<li>Heigth {}</li>
<li>Skin Color {}</li>
<li>Eye Color {}</li>*/}