import { Paper, SpeedDial } from "@mui/material"
import { Typography } from "@mui/material"
import './memberDetails.css';
import CloseIcon from '@mui/icons-material/Close';

export function MemberDetails(props) {
    return (
        <Paper sx={{ pl: 5, pr: 3 }} elevation={8}>
            <SpeedDial
                sx={{ alignItems: 'flex-end' }}
                className="close-button"
                ariaLabel="SpeedDial basic example"
                icon={<CloseIcon />}
                onClick={() => { props.onClick() }}
            >
            </SpeedDial>
            <div className="profile-info">
                <img src={props.image}></img>
                <div className="details">
                    <Typography variant="h3">
                        {props.name}
                    </Typography>
                    <Typography variant="h4">
                        {props.content}
                    </Typography>
                    <br></br>
                    <Typography paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}