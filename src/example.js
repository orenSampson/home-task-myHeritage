import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Modal } from "react-native";
import HeaderCustomised from "../components/HeaderCustomised";
import { inputField, lineColor } from "../constants/color";
import { useDispatch, useSelector } from "react-redux";
import * as STATUS from "../constants/taskStatuses";
import TimerProgressCircle from "../components/TimerProgressCircle";
import LengthProgressCircle from "../components/LengthProgressCircle";
import { Dimensions } from "react-native";
import FailureProgressCircle from "../components/FailureProgressCircle";
import BlueTextCustomised from "../components/BlueTextCustomised";
import GrayTextCustomised from "../components/GrayTextCustomised";
import CompanyLogoAndDetails from "../components/CompanyLogoAndDetails";
import OrangeButton from "../components/OrangeButton";
import { setActiveTaskStatus, setTaskInActive } from "../store/actions/tasks";
import HollowOrangeButton from "../components/HollowOrangeButton";
import { addTaskToUserHistory } from "../store/actions/user-history";
import { addCashToWAllet } from "../store/actions/wallet";
import TaskModal from "../components/TaskModal";

const win = Dimensions.get("window");

const ActiveTaskScreen = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const distanchFromTask = 50;
  const dispatch = useDispatch();
  const activeTask = useSelector((state) => state.tasks);
  const openCameraHandler = () => {
    console.log("camera opened");
  };
  const finishTaskAndGetPayedHandler = () => {
    dispatch(addTaskToUserHistory(activeTask.activeTask));
    dispatch(addCashToWAllet(activeTask.activeTask.taskFee));
    toggleModalHandler();
    deactivateTaskHandler();
  };
  const toggleModalHandler = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const uploadPictureHandler = () => {
    console.log("uploading");
  };

  const deactivateTaskHandler = () => {
    dispatch(setTaskInActive());
  };

  const taskReActivateHandler = () => {
    // dispatch(checkDistanceFromTask)
    dispatch(
      setActiveTaskStatus(
        distanchFromTask < 50 ? STATUS.AT_SITE : STATUS.IN_PROGRESS
      )
    );
  };
  const WhichTaskHeaderToRender = () => {
    switch (activeTask.activeTaskStatus) {
      case STATUS.IN_PROGRESS:
      case STATUS.AT_SITE:
        return <HeaderCustomised upperText={"???? ???? ??????????!"} />;
      case STATUS.IN_CHECK:
        return <HeaderCustomised upperText={"???????????? ????????????"} />;
      case STATUS.TIMES_OUT:
        return <HeaderCustomised upperText={"????????, ???????? ????????!"} />;
      case STATUS.FAILURE_FLASH:
      case STATUS.FAILURE_BLUR:
      case STATUS.FAILURE_JOB_NOT_GOOD:
        return <HeaderCustomised upperText={"???????????? ???? ????????????"} />;
      case STATUS.COMPLETED_SUCCESSFULLY:
        return <HeaderCustomised upperText={"???????????? ?????????? ????????????!"} />;
      default:
        return;
    }
  };

  const WhichButtonsToRender = () => {
    switch (activeTask.activeTaskStatus) {
      case STATUS.IN_PROGRESS:
        return (
          <View style={styles.buttonContainer}>
            <View style={styles.twoButtonsWrapper}>
              <OrangeButton text={"???????? ??????????"} disabled />
            </View>
            <View style={styles.twoButtonsWrapper}>
              <OrangeButton text={"???????? ??????????"} disabled />
            </View>
          </View>
        );
      case STATUS.AT_SITE:
        return (
          <View style={styles.buttonContainer}>
            <View style={styles.twoButtonsWrapper}>
              <OrangeButton
                text={"???????? ??????????"}
                onPress={uploadPictureHandler}
              />
            </View>
            <View style={styles.twoButtonsWrapper}>
              <OrangeButton text={"???????? ??????????"} onPress={openCameraHandler} />
            </View>
          </View>
        );
      case STATUS.IN_CHECK:
        return <OrangeButton text={"?????? ???????? ????????????..."} disabled />;
      case STATUS.TIMES_OUT:
        return (
          <OrangeButton
            text={"???????? ???? ???????????? ????????"}
            onPress={deactivateTaskHandler}
          />
        );
      case STATUS.FAILURE_FLASH:
      case STATUS.FAILURE_BLUR:
      case STATUS.FAILURE_JOB_NOT_GOOD:
        return (
          <View style={styles.buttonContainer}>
            <View style={styles.twoButtonsWrapper}>
              <OrangeButton text={"?????? ??????"} onPress={taskReActivateHandler} />
            </View>
            <View style={styles.twoButtonsWrapper}>
              <HollowOrangeButton
                text={"???????????? ????????"}
                onPress={deactivateTaskHandler}
              />
            </View>
          </View>
        );

      case STATUS.COMPLETED_SUCCESSFULLY:
        return (
          <OrangeButton
            text={"????! ???????? ?????? ?????????????? ??????"}
            onPress={toggleModalHandler}
          />
        );
      default:
        return;
    }
  };
  const WhichProgressBarToRender = () => {
    switch (activeTask.activeTaskStatus) {
      case STATUS.IN_PROGRESS:
        return (
          <View style={styles.progressCircleContainer}>
            <TimerProgressCircle />
            <View style={styles.differentiorLine} />
            <LengthProgressCircle />
          </View>
        );
      case STATUS.AT_SITE:
        return (
          <View style={styles.progressCircleContainer}>
            <TimerProgressCircle />
          </View>
        );
      case STATUS.IN_CHECK:
        return (
          // <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={"contain"}
            source={require("../../assets/clock1.png")}
          />
          // </View>
        );
      case STATUS.TIMES_OUT:
        return (
          <View style={styles.progressCircleContainer}>
            <FailureProgressCircle
              isImage
              source={require("../../assets/sandClock1.png")}
              boldedText={"???? ??????????..."}
              text={"???? ????????, ?????? ????????"}
            />
          </View>
        );
      case STATUS.FAILURE_FLASH:
        return (
          <View style={styles.progressCircleContainer}>
            <FailureProgressCircle boldedText={"?????????????? ???? ???????????? ??????????"} />
          </View>
        );
      case STATUS.FAILURE_BLUR:
        return (
          <View style={styles.progressCircleContainer}>
            <FailureProgressCircle
              adjustableWidth={100}
              boldedText={"?????????????? ???????????????? ?????? ????????????"}
            />
          </View>
        );
      case STATUS.FAILURE_JOB_NOT_GOOD:
        return (
          <View style={styles.progressCircleContainer}>
            <FailureProgressCircle
              adjustableWidth={90}
              boldedText={"???????????? ???? ?????????? ??????????"}
            />
          </View>
        );
      case STATUS.COMPLETED_SUCCESSFULLY:
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode={"stretch"}
              source={require("../../assets/jobSuccess1.png")}
            />
          </View>
        );

      default:
        return;
    }
  };

  return (
    <View style={[styles.taskContainer]}>
      <Modal
        animationType="slide"
        transparent
        visible={isTaskModalOpen}
        onRequestClose={toggleModalHandler}
      >
        <TaskModal
          taskTitle={activeTask.activeTask.taskTitle}
          taskCompanyAddress={activeTask.activeTask.taskCompanyAddress}
          taskCompanyName={activeTask.activeTask.taskCompanyName}
          taskCompanyLogo={activeTask.activeTask.taskCompanyLogo}
          taskCompanyCity={activeTask.activeTask.taskCompanyCity}
          taskCurrency={activeTask.activeTask.taskCurrency}
          taskFee={activeTask.activeTask.taskFee}
          finishTaskAndGetPayedHandler={finishTaskAndGetPayedHandler}
          toggleModalHandler={toggleModalHandler}
        />
      </Modal>
      {WhichTaskHeaderToRender()}
      {WhichProgressBarToRender()}
      <View style={styles.bottomSpacing}>
        <View style={[styles.borderBottom, styles.bottomSpacing]}>
          <BlueTextCustomised text={activeTask.activeTask.taskTitle} />
        </View>
        <View style={[styles.borderBottom, styles.bottomSpacing]}>
          <GrayTextCustomised
            isLarge
            text={activeTask.activeTask.taskExtraDetails}
          />
        </View>
        <View
          style={[styles.rowArea, styles.borderBottom, styles.bottomSpacing]}
        >
          <CompanyLogoAndDetails
            taskCompanyAddress={activeTask.activeTask.taskCompanyAddress}
            taskCompanyName={activeTask.activeTask.taskCompanyName}
            taskCompanyLogo={activeTask.activeTask.taskCompanyLogo}
            taskCompanyCity={activeTask.activeTask.taskCompanyCity}
            isTaskCard
          />
        </View>
        <View style={styles.feesContainer}>
          <Text style={styles.textXXL}>
            {activeTask.activeTask.taskCurrency}
            {activeTask.activeTask.taskFee}
          </Text>
          {activeTask.activeTaskStatus === STATUS.COMPLETED_SUCCESSFULLY && (
            <Image source={require("../../assets/intoTheWallet1.png")} />
          )}
        </View>
        {WhichButtonsToRender()}
      </View>
    </View>
  );
};

export default ActiveTaskScreen;

const styles = StyleSheet.create({
  differentiorLine: {
    width: 1,
    height: "50%",
    borderWidth: 1,
    borderColor: lineColor,
    marginHorizontal: "5%",
    alignSelf: "center",
  },
  progressCircleContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  imageContainer: { alignItems: "center", width: win.width },
  image: { width: 150, height: 150 },
  borderBottom: { borderBottomWidth: 2.5, borderBottomColor: inputField },
  bottomSpacing: { marginVertical: "2%", paddingBottom: 10 },
  taskContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  rowArea: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    width: "100%",
  },
  feesContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  textXXL: { fontSize: 60, fontWeight: "bold", marginHorizontal: 15 },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  twoButtonsWrapper: { width: "47%" },
});
