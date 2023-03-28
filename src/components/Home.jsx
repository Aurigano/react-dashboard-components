import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";
import { addDays } from "date-fns";
import Select, { components } from "react-select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

import DeltaFourLogo from "/Logo.svg";
import BriefcaseIcon from "/briefcase.svg";
import SearchIcon from "/search.svg";
import BasicDateRangePicker from "./DateRange";

const StyledHomeDiv = styled("div")(
	() => `
    width: 100%;
    height: 100%;
    display: flex;
    .searchBar > div > fieldset {
        border: none;
    }
    .searchBar {
        background: #E3EBF7;
        border-radius: 8px;
        font-family: 'Poppins';
    }
    .noBorder {
        border: none;
    }
    .RightDiv {
        width: 100%;
        color: #111111;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
    }
    .topnav {
        display: flex;
    }
	.left-topnav {
		border-bottom: 1px solid rgba(14, 37, 57, 0.1);
        padding: 20px;
        display: flex;
        align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	.select-group {
		display: flex;
	}
	.unit-select {
		margin: 0 10px;
	}
	.project-select {
		margin: 0 10px;
	}
	.time-range-date {
		background-color: #EEEEEE;
		font-family: 'Poppins';
		box-shadow: none;
		height: 56px;
		font-weight: 400;
		color: black;
		margin: 0 10px;
		:hover {
			background-color: #EEEEEE;
			box-shadow: none;
		}
	}
	.notif-icon {
		margin: 0;
		font-size: 30px !important;
	}
	.notif-mui-btn {
		margin: 0;
	}
	.notif-btn {
		border-radius: 50%;
		height: 62px;
		padding: 0;
	}
	.right-topnav {
		border-left: 1px solid rgba(14, 37, 57, 0.3);
		border-bottom: 1px solid rgba(14, 37, 57, 0.1);
		background: #E3EBF7;
		display: flex;
		align-items: center;
		padding: 20px;
	}
	.user-avatar {
		width: 56px;
		height: 56px;
	}
	.profile-name {
		font-family: "Inter";
		font-size: 25px;
		white-space: nowrap;
		color: #666666;
		margin: 0 30px;
	}
`
);

const StyledSideNav = styled("div")(
	() => `
    background-color: #0E2539;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    width: 238px;
    height: 100%;

    .logo-control {
        height: 300px;
        padding: 50px 45px 10px;
    }
    .icon-control {
        height: 25px;
        margin: 0 15px;
        // padding: 50px 45px 10px;
    }
    .menu {
        padding: 20px 10px;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
    }
    .active {
        background : #1F3F5C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
);

const SideNavOptions = [
	{
		name: "Dashboard",
		link: "dashboard",
		icon: BriefcaseIcon,
	},
	{
		name: "Work Permits",
		link: "work-permits",
		icon: BriefcaseIcon,
	},
	{
		name: "Areas",
		link: "areas",
		icon: BriefcaseIcon,
	},
	{
		name: "Projects",
		link: "projects",
		icon: BriefcaseIcon,
	},
	{
		name: "Users",
		link: "users",
		icon: BriefcaseIcon,
	},
	{
		name: "Reports",
		link: "reports",
		icon: BriefcaseIcon,
	},
	{
		name: "Profile",
		link: "profile",
		icon: BriefcaseIcon,
	},
];

function Home() {
	const currentUrl = window.location.href;
	const currentSlug = currentUrl.slice(currentUrl.lastIndexOf("/") + 1);
	const [active, setActive] = React.useState(currentSlug);
	const [age, setAge] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);

	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];

	const optionsProfile = [
		{ value: "chocolate", label: "Profile" },
		{ value: "strawberry", label: "Settings" },
		{ value: "vanilla", label: "Logout" },
	];

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};

	const handleChange = (selectedOption) => {
		setAge(selectedOption, () => console.log(`Option selected:`, age));
	};

	// const handleChange = (event) => {
	// 	setAge(event.target.value);
	// };

	function isActive(link) {
		if (currentSlug === link) return "active";
		else "";
	}

	// console.log(active);
	// console.log(isActive(currentSlug));
	console.log(selectedValue);

	function convertDateString(dateString) {
		const date = new Date(dateString);
		const month = ("0" + (date.getMonth() + 1)).slice(-2);
		const day = ("0" + (date.getDate() + 1)).slice(-2);
		return [day, month, date.getFullYear()].join(" ");
	}

	const StartDate = convertDateString(selectedValue[0].startDate);
	const EndDate = convertDateString(selectedValue[0].endDate);

	console.log({ StartDate, EndDate });

	const Placeholder = (props) => {
		return <components.Placeholder {...props} />;
	};

	const CaretDownIcon = () => {
		return <ArrowDropDownIcon />;
	};

	const DropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<CaretDownIcon />
			</components.DropdownIndicator>
		);
	};

	return (
		<StyledHomeDiv>
			<StyledSideNav>
				<img src={DeltaFourLogo} alt="logo" className="logo-control" />
				{SideNavOptions.map((Option) => (
					<NavLink
						to={Option.link}
						onClick={() => setActive(Option.link)}
						className={clsx("menu", isActive(Option.link))}
						key={Option.name}
					>
						<img
							src={Option.icon}
							alt="icon"
							className="icon-control"
						/>
						{Option.name}
					</NavLink>
				))}
			</StyledSideNav>
			<div className="RightDiv">
				<div className="topnav">
					<div className="left-topnav">
						<TextField
							// sx={{
							// 	// "& .MuiInputLabel-root": { color: "green" }, //styles the label
							// 	"& .MuiOutlinedInput-root": {
							// 		"& > fieldset": { border: "none" },
							// 	},
							// }}
							className="searchBar"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<img
											src={SearchIcon}
											alt="Search Icon"
											className="search-control"
										/>
									</InputAdornment>
								),
								classes: { notchedOutline: "noBorder" },
							}}
						/>
						<div className="select-group">
							<Select
								className="unit-select"
								defaultValue={{ label: "Unit name", value: 0 }}
								name="color"
								options={options}
								onChange={handleChange}
								classNamePrefix="react-select"
								components={{ Placeholder, DropdownIndicator }}
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										height: "56px",
										backgroundColor: "#EEEEEE",
										border: "none",
									}),
									indicatorSeparator: (
										baseStyles,
										state
									) => ({
										...baseStyles,
										display: "none",
									}),
									dropdownIndicator: (baseStyles, state) => ({
										...baseStyles,
										color: "#000000 !important",
									}),
								}}
							/>
							<Select
								className="project-select"
								classNamePrefix="proj-select"
								defaultValue={{
									label: "Project Site",
									value: 0,
								}}
								name="color"
								options={options}
								onChange={handleChange}
								components={{ Placeholder, DropdownIndicator }}
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										height: "56px",
										backgroundColor: "#EEEEEE",
										border: "none",
									}),
									indicatorSeparator: (
										baseStyles,
										state
									) => ({
										...baseStyles,
										display: "none",
									}),
									dropdownIndicator: (baseStyles, state) => ({
										...baseStyles,
										color: "#000000 !important",
									}),
								}}
							/>
							<Button
								variant="contained"
								endIcon={<ArrowDropDownIcon />}
								onClick={handleClickOpen}
								className="time-range-date"
							>
								{StartDate} - {EndDate}
							</Button>
							<BasicDateRangePicker
								selectedValue={selectedValue}
								open={open}
								onClose={handleClose}
							/>
						</div>
						<div className="profile-section">
							<Button
								variant="outlined"
								className="notif-btn"
								classes={{ startIcon: "notif-mui-btn" }}
								startIcon={
									<NotificationsIcon
										fontSize="large"
										className="notif-icon"
									/>
								}
							/>
						</div>
					</div>
					<div className="right-topnav">
						<Avatar
							className="user-avatar"
							alt="user-avatar"
							src="/user.png"
						/>
						<p className="profile-name">Hello Nihar</p>
						<Select
							className="logout-select"
							classNamePrefix="proj-select"
							defaultValue={{
								label: "",
								value: 0,
							}}
							name="color"
							options={optionsProfile}
							onChange={handleChange}
							// components={{ Placeholder, DropdownIndicator }}
							styles={{
								control: (baseStyles, state) => ({
									...baseStyles,
									height: "100%",
									backgroundColor: "#E3EBF7",
									border: "none",
								}),
								indicatorSeparator: (baseStyles, state) => ({
									...baseStyles,
									display: "none",
								}),
								dropdownIndicator: (baseStyles, state) => ({
									...baseStyles,
									color: "#000000 !important",
								}),
								menu: (baseStyles, state) => ({
									...baseStyles,
									right: "0",
									width: "auto",
								}),
								valueContainer: (baseStyles, state) => ({
									...baseStyles,
									display: "none",
								}),
							}}
						/>
					</div>
				</div>
				<Outlet />
			</div>
		</StyledHomeDiv>
	);
}

export default Home;
