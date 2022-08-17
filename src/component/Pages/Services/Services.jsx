import "./services.css";
import { AiOutlineRight } from "react-icons/ai";
import MainLayout from "../../Layouts/MainLayout";
import banner from "/assets/images/bg/banner.jpg";
import { Link } from "react-router-dom";
import Bread from "../Breadcrumb/Bread";

import useDatas from "./../../../hooks/useData";

export default function Services() {
  const { services } = useDatas("services");
  return (
    <MainLayout title="Services">
      <Bread title="Our Services" subtitle="Our service" />
      <section className="section service-2">
        <div className="container">
          <div className="row">
            {services?.map((item) => (
              <ServiceCart
                className="col-lg-4 col-md-6 col-sm-6"
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
      <ServiceBanner />
    </MainLayout>
  );
}

export const ServiceCart = ({ id, title, desc, image, className }) => (
  <div className={className}>
    <div className="service-block mb-5">
      <img src={image} alt={title} className="img-fluid" />
      <div className="content">
        <h4 className="mt-4 mb-2 title-color">{title}</h4>
        <p className="mb-4">{desc}</p>
      </div>

      <Link to={"/serice/" + id} className="btn btn-main-2 btn-round-full">
        Appoinment <AiOutlineRight />
      </Link>
    </div>
  </div>
);

export const ServiceBanner = () => {
  return (
    <section
      className="section cta-page"
      style={{ background: `url(${banner}) no-repeat` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="cta-content">
              <div className="divider mb-4"></div>
              <h2 className="mb-5 text-lg">
                We are pleased to offer you the{" "}
                <span className="title-color">chance to have the healthy</span>
              </h2>
              <Link to="/appoinment" className="btn btn-main-2 btn-round-full">
                Get appoinment <AiOutlineRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
