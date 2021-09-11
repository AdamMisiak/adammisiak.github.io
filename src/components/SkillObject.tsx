import '../styles/Skills.css'

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
    <div title={props.name} data-aos="flip-up" data-aos-duration="1500" className={"skills-element " + (props.name)}>
      {props.icon}
    </div>
  );
};

export default SkillObject;
