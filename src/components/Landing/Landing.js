import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";


import {
	FaInstagram,
	FaSpotify,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaFacebook,
} from "react-icons/fa";

function Landing() {
	const { theme, drawerOpen } = useContext(ThemeContext);

	// Layout structure:
	// Left Container - Social Icons
	// Main Content Area - Image and Heading Stacked
	
	return (
		<div className="landing">
			<div className="landing--image" style={{ position: "relative" }}>
				<img
					src={headerData.image}
					alt="Profile"
					style={{ borderColor: theme.primary }}
				/>
				<div
					className="landing--overlay-content"
					style={{
						position: "relative",
						left: "0px",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						alignItems: "center",
						color: "#ffffff",
						background: "transparent",
						bottom: "100%",
					}}
				>
					<div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
						<h1>{headerData.name}</h1>
						<p>{headerData.description}</p>
					</div>
					<div className="lcl--content" style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
						{socialsData.linkedIn && (
						<a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
							<FaLinkedin className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					{socialsData.github && (
						<a href={socialsData.github} target="_blank" rel="noreferrer">
							<FaGithub className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					{socialsData.twitter && (
						<a href={socialsData.twitter} target="_blank" rel="noreferrer">
							<FaTwitter className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					{socialsData.spotify && (
						<a href={socialsData.spotify} target="_blank" rel="noreferrer">
							<FaSpotify className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					{socialsData.instagram && (
						<a href={socialsData.instagram} target="_blank" rel="noreferrer">
							<FaInstagram className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					{socialsData.facebook && (
						<a href={socialsData.facebook} target="_blank" rel="noreferrer">
							<FaFacebook className="landing--social" style={{ color: "#ffffff" }} />
						</a>
					)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
