import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "./Links.css";


export default function Float() {
    let links = [
        {
            Name: "LinkdIn",
            Icon: <LinkedInIcon fontSize="100px" />,
            href: "https://www.linkedin.com/in/manikandan-n-1495831ab/",
            borders: "rounded-top"
        },
        {
            Name: "Github",
            Icon: <GitHubIcon fontSize="100px" />,
            href: "https://github.com/trythebest"

        },
        {
            Name: "Email",
            Icon: <EmailIcon fontSize="100px" />,
            href: "mailto:manikandan.nagarajan.1998@gmail.com"
        },
        {
            Name: "Resume",
            Icon: <ContactPageIcon fontSize="100px" />,
            href: "https://drive.google.com/file/d/1PykUConhG0LSyuXnDzycQN85Tr-MtpBg/view?usp=sharing",
            borders: "rounded-bottom"
        }
    ]
    return (
        <div className=" d-none d-lg-block social">
            <ul style={{ listStyleType: "none" }}>

                {links.map(({ Name, Icon, href, borders }) => (
                    <li class={borders}>
                        <a href={href} target="_blank" className="scl">{Name}</a>
                        {Icon}
                    </li>

                ))}
            </ul>
        </div>
    )
}