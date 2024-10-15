import React from "react";
import { Modal, Button } from "react-bootstrap";

const MonthPickerModal = ({ show, handleClose, handleDateChange }) => {
  // Function to generate all dates in the month
  const generateMonthDates = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthDates = [];

    // Set the date to the first day of the month
    currentDate.setDate(1);

    // Loop through each day of the month
    while (currentDate.getMonth() === currentMonth) {
      monthDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return monthDates;
  };

  // Handle click on a specific date
  const handleDateClick = (date) => {
    handleDateChange(date);
    handleClose();
  };

  // Render the list of dates in the month
  const renderMonthDates = () => {
    const monthDates = generateMonthDates();
    return monthDates.map((date, index) => (
      <Button
        key={index}
        variant="outline-primary"
        className="m-1"
        onClick={() => handleDateClick(date)}
      >
        {date.getDate()}
      </Button>
    ));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Pick a Date</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-wrap justify-content-center">
          {renderMonthDates()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MonthPickerModal;
