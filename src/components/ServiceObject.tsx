import '../styles/Services.css'

import React from "react";

interface ServiceObjectProps {
    id: number;
    title: string;
    image: any;
}

const ServiceObject: React.FunctionComponent<ServiceObjectProps> = (props: ServiceObjectProps) => {
    return (
      <div key={props.id} className="services-element">
        <div className="services-element-icon circle-medium">
          {props.image}
        </div>
        <h1>{props.title}</h1>
      </div>
    );
};

export default ServiceObject;
