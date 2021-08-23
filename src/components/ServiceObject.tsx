import '../styles/Services.css'

import React from "react";

interface ServiceObjectProps {
    id: number;
    title: string;
    image: any;
    site: string;
}

const ServiceObject: React.FunctionComponent<ServiceObjectProps> = (props: ServiceObjectProps) => {
    let animation = ""
    if (props.site === "left") {
      animation = "fade-left"
    } else {
      animation = "fade-right"
    }
    return (
      <div data-aos={animation} key={props.id} className="services-element">
        <div className="services-element-icon circle-medium">
          {props.image}
        </div>
        <h1>{props.title}</h1>
      </div>
    );
};

export default ServiceObject;
