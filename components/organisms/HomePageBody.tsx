import { makeStyles } from "@material-ui/styles";
import { EventRounded, FitnessCenter } from "@material-ui/icons";
import React from "react";
import { createUseStyles } from "react-jss";
import SignInCard from "./SignInCard";
import { Modal } from "@mui/material";
import { Colors } from "../../constants/Colors";
import iPhone from '../../images/phone.png'

const HomePageBody = (props: any) => {
  //const {modalStore} = useStore();
  const altStyles = createStyles();
  return (
    <div className={altStyles.homePageBodyContainer}>
      <div className={altStyles.containerLeft}>
        <div className={altStyles.itemContainerLeft}>
          <div className={altStyles.iconContainerLeft}>
            <EventRounded className={altStyles.icon} fontSize="large" />
          </div>
          <div>
            <div className={altStyles.programsHeaderText}> 
              Training Programs
            </div>
            <div className={altStyles.programsBodyText}>
              A large number of training programs to help you reach your goal
            </div>
          </div>
        </div>
      </div>
      <div className={altStyles.containerMiddle}>
          <img src={"/iphone.png"} alt="iPhone" className={altStyles.phone}/>
      </div>
      <div className={altStyles.containerRight}>
        <div className={altStyles.itemContainerRight}>
          <div className={altStyles.iconContainerRight}>
            <FitnessCenter className={altStyles.icon} fontSize="large" />
          </div>

          <div className={altStyles.trainersHeaderText}>32+ Trainers</div>
          <div className={altStyles.trainersBodyText}>
            They will help you achieve results
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBody;

const createStyles = createUseStyles({
  phone:{
    maxHeight: 450,
  },
  homePageBodyContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'rgba(0,0,0,0)',
  },
  containerLeft: {
    width: "33%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  itemContainerLeft: {
    height: "70%",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconContainerLeft: {
    backgroundColor: Colors.mainButtonColor,
    height: 75,
    width: 75,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  programsHeaderText: {
    color: "white",
    fontSize: "150%",
    fontWeight: "bold",
    marginTop: "5%",
    width: "50%",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    display: "flex",
  },
  programsBodyText: {
    color: "white",
    fontSize: "90%",
    fontWeight: "bold",
    marginTop: "5%",
    width: "50%",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    display: "flex",
  },
  containerMiddle: {
    width: "34%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "120%",
    color: Colors.mainButtonColor,
    fontWeight: 'bold'
  },
  containerRight: {
    width: "33%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  itemContainerRight: {
    paddingLeft: "20%",
    height: "70%",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconContainerRight: {
    backgroundColor: Colors.mainButtonColor,
    height: 75,
    width: 75,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  trainersHeaderText: {
    color: "white",
    fontSize: "150%",
    fontWeight: "bold",
    marginTop: "5%",
    width: "60%",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    display: "flex",
  },
  trainersBodyText: {
    color: 'white',
    fontSize: "90%",
    fontWeight: "bold",
    marginTop: "5%",
    width: "50%",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    display: "flex",
  },
  icon: {
    color: "white",
  },
});
