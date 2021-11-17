import { Typography } from "@mui/material";
import { useState } from "react";
import './about.css';
import MemberBrief from "../../components/MemberBrief";
import avatar from '../../public/images/avatar.jpg'
import { MemberDetails } from "../../components/memberDetails";

export default function About() {

    let [selected, setMember] = useState(false);
    let [content, setContent] = useState(false);

    function memberClicked(member) {
        setMember(member.name);
        setContent(member.content);
    }

    return (
        <div className="about-wrapper">
            <h1>About Us</h1>
            <div className="about-info">
                <Typography paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </div>
            <br></br>

            {!selected ? <div className="team-container">
                <MemberBrief onClick={memberClicked} name="Parth Prajapati" content="Backend Developer" image={avatar}></MemberBrief>
                <MemberBrief onClick={memberClicked} name="Pankil Parikh" content="Front End Developer" image={avatar}></MemberBrief>
                <MemberBrief onClick={memberClicked} name="Meet Patel" content="Web Designer" image={avatar}></MemberBrief>
            </div> :

                <MemberDetails name={selected} image={avatar} content={content} onClick={() => { setMember(false); setContent(false); }}></MemberDetails>
            }

        </div>
    )
}