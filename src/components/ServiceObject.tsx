import '../styles/Services.css'

import React from "react";

interface ServiceObjectProps {
    title: string;
    image: string;
    text: string;
}

const ServiceObject: React.FunctionComponent<ServiceObjectProps> = (props: ServiceObjectProps) => {
    return (
      <div className="services-element">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    );
};

export default ServiceObject;
