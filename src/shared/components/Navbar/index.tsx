import _ from "lodash";
import { Container, Nav, Navbar as ReactBootstrapNavbar } from "react-bootstrap";

import SwaggerIcon from "../../icons/SwaggerIcon";
import VscIcon from "../../icons/VscIcon";
import NavbarBrand from "./components/NavbarBrand";

export default function Navbar() {
	const NAVBAR_LINKS = [
		{
			title: "Swagger UI",
			href: "https://jacob-dolorzo-global-eye-server.onrender.com/swagger/index.html",
			target: "_blank",
			icon: <SwaggerIcon />
		},
		{
			title: "VSC extension",
			href: "https://marketplace.visualstudio.com/items?itemName=JacobDolorzo.96jd-global-eye",
			target: "_blank",
			icon: <VscIcon />
		}
	];

	return (
		<ReactBootstrapNavbar className="navbar-bg">
			<Container>
				<NavbarBrand />
				<Nav className="ms-4 me-auto">
					{_.map(NAVBAR_LINKS, (link) => (
						<Nav.Link key={link.title} className="ms-2" title={link.title} href={link.href} target="_blank">
							{link.icon}
						</Nav.Link>
					))}
				</Nav>
			</Container>
		</ReactBootstrapNavbar>
	);
}
