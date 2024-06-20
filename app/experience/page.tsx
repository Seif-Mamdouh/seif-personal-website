import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-title">
        Experience
      </div>

      {/* Ernst & Young */}
      <div className="experience-item">
        <div className="experience-role" >
          <img src="/Ernst.png" alt="Ernst & Young Logo" className="experience-logo" width={100} height={100} style={{marginRight: '3%'}}/>
          Ernst & Young | Software Engineer Intern June 2023 - Aug 2023
        </div>
        <div className="experience-description">
        Automated over 200 test cases using Tricentis Tosca, leading to a 40% reduction in testing time and enhanced software quality.
        </div>
      </div>

      {/* Chick-Fil-A */}
      <div className="experience-item">
        <div className="experience-role">
          <img src="/cfa.png" alt="CFA Logo" className="experience-logo" width={90} height={90} style={{marginRight: '3%'}}/>
          Chick-Fil-A Corporate | Software Engineer Intern Jan 2023 - May 2023
        </div>
        <div className="experience-description">
        Led the end-to-end development of the Location Viewer app in ReactJS within 6 weeks, achieving 1300 active users.
        </div>
      </div>

      {/* NJ Transit */}
      <div className="experience-item">
        <div className="experience-role">
          <img src="/njt.png" alt="NJT Logo" className="experience-logo" width={90} height={90} style={{marginRight: '3%'}}/>
          NJ Transit | Software Engineer Intern June 2022 - Aug 2022
        </div>
        <div className="experience-description">
          Reduced data processing time from 3 minutes to 3 minutes by implementing an automated system in Python</div>
      </div>

      {/* Wi-Drive */}
      <div className="experience-item">
        <div className="experience-role">
          <img src="/wd.png" alt="Wi-Drive Logo" className="experience-logo" width={70} height={70} style={{marginRight: '5%'}}/>
          Wi-Drive | Software Engineer Intern Aug 2021 - Dec 2021
        </div>
        <div className="experience-description">
          Enhanced user engagement and reservation funnel by 35% by developing a new engaging website.
        </div>
      </div>

      {/* Kanopy Labs */}
      <div className="experience-item">
        <div className="experience-role">
          <img src="/kl.png" alt="Kanopy Labs Logo" className="experience-logo" width={100} height={100} style={{marginRight: '3%'}}/>
          Kanopy Labs | Software Engineer Intern May 2021 - June 2021
        </div>
        <div className="experience-description">
          Engaged with clients and provide consultation on software solutions, business plans and design to bring client's ideas to life.
        </div>
      </div>

    </div>
  );
}

export default Experience;
