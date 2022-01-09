import { EventRounded, FitnessCenter } from "@mui/icons-material";
import React from "react";
import s from './HomePageBody.module.css'

const HomePageBody = (props: any) => {
  //const {modalStore} = useStore();
  return (
    <div className={s.homePageBodyContainer}>
      <div className={s.containerLeft}>
        <div className={s.itemContainerLeft}>
          <div className={s.iconContainerLeft}>
            <EventRounded className={s.icon} fontSize="large" />
          </div>
          <div>
            <div className={s.programsHeaderText}> 
              Training Programs
            </div>
            <div className={s.programsBodyText}>
              A large number of training programs to help you reach your goal
            </div>
          </div>
        </div>
      </div>
      <div className={s.containerMiddle}>
          {/* <im/* g src={"/iphone.png"} alt="iPhone" className={s.phone}/> */} */
      </div>
      <div className={s.containerRight}>
        <div className={s.itemContainerRight}>
          <div className={s.iconContainerRight}>
             <FitnessCenter className={s.icon} fontSize="large" /> 
          </div>

          <div className={s.trainersHeaderText}>32+ Trainers</div>
          <div className={s.trainersBodyText}>
            They will help you achieve results
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBody;