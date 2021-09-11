import '../styles/Skills.css'
import Tooltip from '@material-ui/core/Tooltip';
import React from "react";
import {StyledIcon} from '@styled-icons/styled-icon'

// 'any' need to be fixed
interface SkillObjectProps {
  id: number;
  icon: StyledIcon | any;
  name: string;
}

const SkillObject: React.FunctionComponent<SkillObjectProps> = (props: SkillObjectProps) => {
  return (
    <div data-aos="flip-up" data-aos-duration="1500" className={"skills-element " + (props.name)}>
      <Tooltip title={props.name[0].toUpperCase() + props.name.slice(1)}>
        {props.icon}
      </Tooltip>
    </div>
  );
};

export default SkillObject;
