import { React } from 'react';
import '../styles/skills.css';
import skills_data from '../data/skills.json';
// import react_icon from '../assets/react_icon.png';
// import javascript_icon from '../assets/javascript_icon.png';
// import html_icon from '../assets/html_icon.png';
// import css_icon from '../assets/css_icon.png';
// import figma_icon from '../assets/figma_icon.png';
// import jira_icon from '../assets/jira_icon.png';
// import java_icon from '../assets/java_icon.png';
// import ui_ux_icon from '../assets/ui_ux_icon.png';
// import aws_cloud_icon from '../assets/aws_cloud_icon.png';
// import python_icon from '../assets/python_icon.png';
// import mysql_icon from '../assets/mysql_icon.png';
// import c_plus_plus_icon from '../assets/c++_icon.png';

const skills = skills_data.skills;

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill) => {
        return(
          <div className="skill">
            {/* <img src={require(skill.path)} /> */}
            <img src={require("../assets/react_icon.png")} />
            <p>{skill.name}</p>
          </div>
        )
        })}
    </div>
  )
}

export default Skills;
