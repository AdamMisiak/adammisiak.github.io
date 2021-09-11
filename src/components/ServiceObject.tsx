import '../styles/Services.css'

import React from "react";

interface ServiceObjectProps {
    id: number;
    title: string;
    image: any;
}

const ServiceObject: React.FunctionComponent<ServiceObjectProps> = (props: ServiceObjectProps) => {
    return (
      <div data-aos="fade-left" data-aos-delay="200" className="services-element">
        <div className="services-element-wrapper">
          <div className="services-element-icon circle-medium">
            {props.image}
          </div>
          <h1>{props.title}</h1>
        </div>
      </div>
    );
};

export default ServiceObject;
