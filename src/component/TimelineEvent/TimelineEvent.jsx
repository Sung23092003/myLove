import React from "react";
import PropTypes from "prop-types";

const TimelineEvent = ({ date, title, description, image, icon, iconClass }) => {
  return (
    <div className="mt-80 flex flex-col items-center space-y-6 max-w-3xl" data-aos="fade-up">
      <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
        {date} – {title} {icon && <span className={iconClass}>{icon}</span>}
      </h1>
      <p className="text-white text-2xl font-medium text-center">{description}</p>
      <img src={image} alt={title} className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4" data-aos="fade-up" />
    </div>
  );
};

TimelineEvent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconClass: PropTypes.string,
};

export default TimelineEvent;
