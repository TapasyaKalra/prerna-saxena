import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";

function Navigation() {
	return (
		<div>
			<Navbar
				className="py-3"
				collapseOnSelect
				bg="primary"
				expand="lg"
				fixed="top"
			>
				<Container>
					<Link to="/about">
						<Navbar.Brand
							href="/about"
							className="text-secondary"
							id="navigation-title"
						>
							<img
								src="assets/images/logo.jpg"
								alt=""
								className="header__logo me-2"
							/>
						</Navbar.Brand>
					</Link>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto text-secondary ">
							<Nav.Link eventKey="1">
								<NavLink
									exact
									className="nav-link"
									to="/about"
									activeClassName="active"
									aria-current="page"
								>
									about
								</NavLink>
							</Nav.Link>
							<Nav.Link eventKey="2">
								<NavLink className="nav-link" to="/therapy">
									therapy
								</NavLink>
							</Nav.Link>
							<Nav.Link eventKey="3">
								<NavLink className="nav-link" to="/contact">
									contact
								</NavLink>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
