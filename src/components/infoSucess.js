import React from "react";
import "../css/infosuccess.css";

function InfoSucess({ alert, message }) {
  if (!alert) {
  } else {
    return (
      <div className={`info-${message.info}`}>
        <p>{message.text} ! </p> <Cancel />
      </div>
    );
  }
}

export default InfoSucess;

function Cancel({ handleClick }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9426 12.0001L15.8045 9.13814C16.0652 8.87748 16.0652 8.45616 15.8045 8.1955C15.5439 7.93483 15.1225 7.93483 14.8619 8.1955L12 11.0574L9.13812 8.1955C8.87746 7.93483 8.45615 7.93483 8.19549 8.1955C7.93484 8.45616 7.93484 8.87748 8.19549 9.13814L11.0574 12.0001L8.19549 14.862C7.93484 15.1227 7.93484 15.544 8.19549 15.8047C8.32549 15.9347 8.49615 16 8.66681 16C8.83747 16 9.00812 15.9347 9.13812 15.8047L12 12.9427L14.8619 15.8047C14.9919 15.9347 15.1625 16 15.3332 16C15.5039 16 15.6745 15.9347 15.8045 15.8047C16.0652 15.544 16.0652 15.1227 15.8045 14.862L12.9426 12.0001Z"
        fill="#494B83"
      />
    </svg>
  );
}
