import React from "react";

export function Card() {
	const cardNames = [
		"Card Title 1",
		"Card Title 2",
		"Card Title 3",
		"Card Title 4"
	];
	const cardSection = cardNames.map((singleCard, i) => {
		return (
			<div key={i} className="card mx-3" style={{ width: "16rem" }}>
				<img
					src="https://browser-magenta-wolverine-eimls863.ws-us03.gitpod.io/workspace/react-hello/src/img/rigo-baby.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{singleCard}</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
	return <div className="d-flex flex-row">{cardSection}</div>;
}
