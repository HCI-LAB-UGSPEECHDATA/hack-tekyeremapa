import React from "react";
import "../styles/timeline.css";

const TimelineItem = ({ title, From, To, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        <svg viewBox="0 0 24 24" width="24" height="24" className="check-icon">
          <polyline
            points="20 6 9 17 4 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="timeline-content">
        <div className="timeline-dates">
          <p>From : {From}</p>
          <p>To : {To}</p>
        </div>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Hackathon Application Opens",
      From: "Now",
      To: "30-Mar-2025",
      description:
        "The application period for the hackathon begins. Interested participants can submit their applications to join the competition. Register early to secure your spot!",
    },
    {
      title: "Notify Selected Participants",
      From: "5-Apr-2025",
      To: "5-Apr-2025",
      description:
        "Successful applicants will be notified and provided with details on the next steps, including team formation and mentorship opportunities.",
    },
    {
      title: "Awareness Campaign and Team Outreach",
      From: "7-Apr-2025",
      To: "15-Apr-2025",
      description:
        "An outreach campaign will be conducted to engage selected participants, introduce them to the hackathon objectives, and provide resources for team collaboration.",
    },
    {
      title: "Online Bootcamp and Dataset Introduction",
      From: "21-Apr-2025",
      To: "30-Apr-2025",
      description:
        "Participants will take part in an online bootcamp, where they will be introduced to key datasets, tools, and best practices for developing their solutions.",
    },
    {
      title: "Ideation Sprint with Mentor Reviews",
      From: "19-May-2025",
      To: "1-May-2025",
      description:
        "Teams will engage in an ideation sprint, refining their concepts with feedback from mentors to ensure innovative and impactful solutions.",
    },
    {
      title: "In-Person Mentoring Sessions",
      From: "19-May-2025",
      To: "23-May-2025",
      description:
        "Selected teams will meet with mentors for intensive in-person mentoring, receiving expert guidance to refine their projects ahead of the final event.",
    },
    {
      title: "Hackathon Event",
      From: "26-May-2025",
      To: "30-May-2025",
      description:
        "The main hackathon event takes place! Teams will work intensively on their projects, build prototypes, and present their solutions for evaluation.",
    },
    {
      title: "Post-Event Feedback and Follow-Up",
      From: "1-Jun-2025",
      description:
        "After the hackathon, participants will receive feedback, explore potential project continuation opportunities, and network with industry experts.",
    },
  ];

  return (
    <div id="timelines" className="section timeline-container">
      <h2 className="timeline-header">Timelines</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            From={item.From}
            To={item.To}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
