import '../styles/Skills.css'

import React from "react";
import {StyledIcon} from '@styled-icons/styled-icon'

// 'any' need to be fixed
interface SkillObjectProps {
    icon: StyledIcon | any;
    name: string;
}

const ServiceObject: React.FunctionComponent<SkillObjectProps> = (props: SkillObjectProps) => {
    return (
      <div className={"skills-element " + (props.name)}>
        {props.icon}
      </div>
    );
};

export default ServiceObject;
