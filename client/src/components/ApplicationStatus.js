import React, { useContext, useRef, useState } from "react";
import Card from "react-bootstrap/Card";

import {
	AiOutlineSetting,
	AiOutlineLogout,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import {
	BottomPart,
	MainUser,
	RightBottom,
	SideBarPart,
	TotDiv,
	WhitePara,
} from "./interface";

import { store } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";
import Navbar from "./UI/Navbar";

const ApplicationStatus = () => {
	const navigate = useNavigate();

	/* eslint-disable no-unused-vars */
	const [user, setUser] = useContext(store);

	useEffect(() => {
		console.log(user);
		if (Object.keys(user).length === 0) {
			navigate("/user/login");
		}
		// eslint-disable-next-line
	});

	const tokenRef = useRef();

	const [details, setDetails] = useState({});

	console.log(details.results);
	console.log(typeof details);

	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(tokenRef.current.value);

		if (tokenRef.current.value.length !== 0) {
			const response = await Axios.post(
				"http://localhost:5000/requests/search_for_request",
				{
					token: tokenRef.current.value,
				}
			);

			const data = response.data;
			console.log(data);
			setDetails(data);
		}
	};

	const getColour = (status) => {
		if (status === "Accepted") {
			return "#168205";
		} else if (status === "Pending") {
			console.log("yellow");
			return "#8c8606";
		} else {
			return "red";
		}
	};

	const generateContent = (req_type) => {
		if (req_type === "get_grounds") {
			return (
				// <div>
				// 	<h3>Registered Email : {details.result.useremail}</h3>
				// 	<h3>Request Type : {details.request_type}</h3>
				// 	<h3>
				// 		Ground area and Shape : {details.result.ground_area}
				// 	</h3>
				// 	<h3>Purpose for Ground : {details.result.purpose}</h3>
				// 	<h3>
				// 		Additional Information Provided :{" "}
				// 		{details.result.addn_info}
				// 	</h3>
				// 	<h3>
				// 		Status :{" "}
				// 		<span
				// 			style={{ color: getColour(details.result.status) }}>
				// 			{details.result.status}
				// 		</span>
				// 	</h3>
				// </div>
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{details.request_type}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							Ground Area and Shape &nbsp; : &nbsp;{" "}
							<b>{details.result.ground_area}</b>
							<br />
							Purpose for Ground &nbsp; : &nbsp;{" "}
							<b>{details.result.purpose}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		} else if (req_type === "get_equipment") {
			return (
				// <div>
				// 	<h3>Registered Email : {details.result.useremail}</h3>
				// 	<h3>Request Type : {details.request_type}</h3>
				// 	<h3>
				// 		Name of the equipment needed : {details.result.name}
				// 	</h3>
				// 	<h3>
				// 		Number of people intended :{" "}
				// 		{details.result.number_of_items_and_reason}
				// 	</h3>
				// 	<h3>
				// 		Additional Information Provided :{" "}
				// 		{details.result.addn_info}
				// 	</h3>
				// 	<h3>
				// 		Status :{" "}
				// 		<span
				// 			style={{ color: getColour(details.result.status) }}>
				// 			{details.result.status}
				// 		</span>
				// 	</h3>
				// </div>
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{details.request_type}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							Name of equipment needed &nbsp; : &nbsp;{" "}
							<b>{details.result.name}</b>
							<br />
							Intended number of people : &nbsp; : &nbsp;{" "}
							<b>{details.result.number_of_items_and_reason}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		} else {
			return (
				// <div>
				// 	<h3>Registered Email : {details.result.useremail}</h3>
				// 	<h3>Request Type : {details.request_type}</h3>
				// 	<h3>
				// 		The purpose behind playarea / relaxation area:{" "}
				// 		{details.result.required_for}
				// 	</h3>
				// 	<h3>
				// 		Intended age and reason :{" "}
				// 		{details.intended_age_and_reason}
				// 	</h3>
				// 	<h3>
				// 		Additional Information Provided :{" "}
				// 		{details.result.addn_info}
				// 	</h3>
				// 	<h3>
				// 		Status :{" "}
				// 		<span
				// 			style={{ color: getColour(details.result.status) }}>
				// 			{details.result.status}
				// 		</span>
				// 	</h3>
				// </div>
				<Card style={{ width: "50%", margin: 20, padding: 30 }}>
					<Card.Body>
						<Card.Title>
							Request for <b>{details.request_type}</b>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							From <b>{details.result.useremail}</b>
						</Card.Subtitle>
						<Card.Text>
							<div>
								The purpose behind playarea / relaxation area
								&nbsp; : &nbsp;{" "}
							</div>
							<div>
								<b>{details.result.required_for}</b>
							</div>
							<br />
							Intended age and number of people : &nbsp; : &nbsp;{" "}
							<b>{details.result.intended_age_and_reason}</b>
							<br />
							Additional Information Provided &nbsp; : &nbsp;{" "}
							<b>{details.result.addn_info}</b>
							<br />
							Status &nbsp; : &nbsp;
							<span
								style={{
									color: getColour(details.result.status),
								}}>
								{details.result.status}
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	};

	return (
		<div>
			{/* <TotDiv>
				<SideBarPart>
					<Link to="/user/dashboard">
						<WhitePara>Go to Dashboard</WhitePara>
					</Link>
					<BottomPart>
						<WhitePara>
							<AiOutlineSetting size="20" /> Settings
						</WhitePara>
						<WhitePara>
							<Link to="/user/login">
								<AiOutlineLogout size="20" /> Logout
							</Link>
						</WhitePara>
					</BottomPart>
				</SideBarPart>
				<MainUser>
					<div>
						<p>
							Your User ID is <b>{user._id}</b>
						</p>
						<div class="input-group">
							<br></br>
							<form onSubmit={submitHandler}>
								<input
									type="text"
									class="form-control"
									placeholder="User ID Token from email"
									aria-label="User ID Token from email"
									aria-describedby="basic-addon2"
									style={{ width: "50%" }}
									ref={tokenRef}
								/>
								<br></br>
								<div class="input-group-append">
									<button
										class="btn btn-outline-secondary"
										type="submit">
										Generate Application Status
									</button>
								</div>
							</form>
						</div>
						<br></br>
						{details.result === undefined ? (
							<p>Enter the ID and search for results</p>
						) : (
							<div>{generateContent(details.request_type)}</div>
						)}
					</div>
				</MainUser>
				<RightBottom
					onClick={() => {
						navigate("/user/request");
					}}>
					<div>
						<AiOutlinePlusCircle
							size="75"
							style={{ color: "#6d0391" }}
						/>
					</div>
					<p style={{ color: "#6d0391" }}>New Application</p>
				</RightBottom>
			</TotDiv> */}

			<Navbar user="User" />
			<div class="input-group">
				<br></br>
				<form onSubmit={submitHandler}>
					<button disabled>Token no :</button>
					<input
						type="text"
						class="form-control"
						placeholder="User ID Token from email"
						aria-label="User ID Token from email"
						aria-describedby="basic-addon2"
						style={{ width: "50%" }}
						ref={tokenRef}
					/>
					<br></br>
					<div class="input-group-append">
						<button
							style={{ marginTop: 15 }}
							class="btn btn-outline-secondary"
							type="submit">
							Generate Application Status
						</button>
					</div>
				</form>
			</div>
			<br></br>
			{details.result === undefined ? (
				<p>Enter the ID and search for results</p>
			) : (
				<div
					style={{
						padding: 20,
						alignItems: "center",
						display: "flex",
						justifyContent: "center",
					}}>
					{generateContent(details.request_type)}
				</div>
			)}

			<div></div>
		</div>
	);
};

export default ApplicationStatus;
