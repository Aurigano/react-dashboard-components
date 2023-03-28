import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const StyledCardWrapper = styled("div")(
	() => `
	display: flex;
	height: 100%;
    align-items: center;
    padding: 20px 10px;
	.carousel-style {
		flex: 1;
		height: 100%;
		width: 50%;
	}
	.card-parent {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0 10px;
	}
	.element-wrapper {
		display: flex;
		align-items: center;
		border: 1px solid #D9D9D9;
		border-radius: 20px;
		margin-bottom: 10px;
		padding: 15px 40px;
		width: 100%;
	}
	.text {
		padding: 20px;
	}
	.name {
		font-weight: 600;
		font-size: 24px;
	}
	.desg {
		font-weight: 400;
		font-size: 16px;
	}
	.img-control {
		width: auto !important;
	}
	.control-dots {
		display: none;
	}
	.carousel-status {
		display: none;
	}
	.next-arrow {
		width: 40px;
	}
	.prev-arrow {
		width: 40px;
		transform: scaleX(-1);
	}
`
);

function CarouselComponent() {
	const arrowStyles = {
		position: "absolute",
		zIndex: 2,
		top: "calc(40% - 40px)",
		width: 30,
		height: 75,
		cursor: "pointer",
	};
	return (
		<StyledCardWrapper>
			<Carousel
				autoPlay
				infiniteLoop
				interval={3000}
				className="carousel-style"
				// renderArrowPrev={(onClickHandler, hasPrev, label) =>
				// 	hasPrev && (
				// 		<Button
				// 			onClick={onClickHandler}
				// 			title={label}
				// 			style={{ ...arrowStyles, left: 15 }}
				// 		>
				// 			<img
				// 				src="/next.svg"
				// 				alt="prev-arrow"
				// 				className="prev-arrow"
				// 			/>
				// 		</Button>
				// 	)
				// }
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<Button
							onClick={onClickHandler}
							title={label}
							style={{ ...arrowStyles, right: 15 }}
						>
							<img
								src="/next.svg"
								alt="next-arrow"
								className="next-arrow"
							/>
						</Button>
					)
				}
			>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image.svg"
							alt="stats-image"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Ankit Jha</p>
							<p className="desg">Mechanical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">
						Maximum permits created in last month
					</p>
				</div>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image2.svg"
							alt="stats-image2"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Rahul Yadav</p>
							<p className="desg">Electrical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">Max LOTO done in last month</p>
				</div>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image.svg"
							alt="stats-image"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Ankit Jha</p>
							<p className="desg">Mechanical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">
						Maximum permits created in last month
					</p>
				</div>
			</Carousel>
			<Carousel
				autoPlay
				infiniteLoop
				interval={3000}
				className="carousel-style"
				// renderArrowPrev={(onClickHandler, hasPrev, label) =>
				// 	hasPrev && (
				// 		<Button
				// 			onClick={onClickHandler}
				// 			title={label}
				// 			style={{ ...arrowStyles, left: 15 }}
				// 		>
				// 			<img
				// 				src="/next.svg"
				// 				alt="prev-arrow"
				// 				className="prev-arrow"
				// 			/>
				// 		</Button>
				// 	)
				// }
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<Button
							onClick={onClickHandler}
							title={label}
							style={{ ...arrowStyles, right: 15 }}
						>
							<img
								src="/next.svg"
								alt="next-arrow"
								className="next-arrow"
							/>
						</Button>
					)
				}
			>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image2.svg"
							alt="stats-image2"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Rahul Yadav</p>
							<p className="desg">Electrical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">Max LOTO done in last month</p>
				</div>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image.svg"
							alt="stats-image"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Ankit Jha</p>
							<p className="desg">Mechanical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">
						Maximum permits created in last month
					</p>
				</div>
				<div className="card-parent">
					<div className="element-wrapper">
						<img
							src="/stats-image2.svg"
							alt="stats-image2"
							className="img-control"
						/>
						<div className="text">
							<p className="name">Rahul Yadav</p>
							<p className="desg">Electrical Maintenance</p>
						</div>
						<div className="next-btn"></div>
					</div>
					<p className="footer-note">Max LOTO done in last month</p>
				</div>
			</Carousel>
		</StyledCardWrapper>
	);
}

export default CarouselComponent;
