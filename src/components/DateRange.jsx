import { useState } from "react";
import { makeStyles } from "@mui/styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

const useStyles = makeStyles(() => ({
	paper: {
		maxWidth: "none !important",
		maxHeight: "none !important",
		position: "absolute",
		left: 10,
		top: 50,
	},
}));

const StyledDiv = styled("div")(
	() => `
    .date-range-styles {
        background:red
    }
    .rdrDefinedRangesWrapper {
        display: none;
      }
`
);
const StyledDialog = styled(Dialog)`
	div {
		max-width: auto;
	}
	.MuiDialog-paper {
		max-width: auto;
	}
`;
export default function BasicDateRangePicker(props) {
	const classes = useStyles();
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(state);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);
	// console.log(state);
	return (
		<StyledDialog
			onClose={handleClose}
			open={open}
			PaperProps={{
				style: {
					maxWidth: "auto",
				},
			}}
			classes={{ paper: classes.paper }}
			// overlayStyle={{ backgroundColor: "transparent" }}
			BackdropProps={{ style: { backgroundColor: "transparent" } }}
		>
			<StyledDiv>
				<DateRangePicker
					onChange={(item) => {
						setState([item.selection]);
					}}
					showSelectionPreview={true}
					moveRangeOnFirstSelection={false}
					months={2}
					ranges={state}
					direction="horizontal"
					staticRanges={[]}
					inputRanges={[]}
					className="date-range-styles"
				/>
			</StyledDiv>
		</StyledDialog>
	);
}
