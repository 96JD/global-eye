import { Spinner as ReactSpinner } from "react-bootstrap";

export default function Spinner() {
	return (
		<div className="text-center">
			<ReactSpinner className="main-color" animation="border">
				<span className="visually-hidden">Loading...</span>
			</ReactSpinner>
		</div>
	);
}
