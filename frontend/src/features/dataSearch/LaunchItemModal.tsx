import React from 'react';
import Modal from 'react-bootstrap/Modal';
import LaunchData from './LauncData.types';
import useReformatDate from '../../hooks/useReformatDate';

interface LaunchItemModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  filteredLaunches: LaunchData[] | null;
  launchId: string;
}

const LaunchItemModal: React.FC<LaunchItemModalProps> = ({showModal, setShowModal, filteredLaunches, launchId}) => {
  
  const handleCloseModal = () => setShowModal(false);
  const { dateMonthYear, minuteHour } = useReformatDate()

  const LaunchItemData = filteredLaunches?.filter(data => data.id === launchId)[0];

  if (!LaunchItemData) return false

  const {
      name,
      date_utc,
      details,
      links: {
          patch: { small }
      },
      failures
  } = LaunchItemData

  const launchDate = dateMonthYear(date_utc);
  const launchTime = minuteHour(date_utc);

  if (!failures) return false

  const timeFailed = failures[0]?.time
  const altitude = failures[0]?.altitude
  const reason = failures[0]?.reason

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <img src={small} alt={name} />
          <p>{`${launchDate} at ${launchTime}`}</p>
        </div>
        {
          failures?.length !== 0 &&
          <div>
            <p>
              Failed time after launch: 
              <span>{timeFailed < 0 ? ' Failed before launching' : ` ${timeFailed} seconds`}</span>
            </p>
            <p>
              Altitude: 
              <span>{altitude === null || altitude === 0 ? ' 0' : ` ${altitude}km`}</span>
            </p>
            <p>
              Reason:
              <span>{` ${reason}`}</span>
            </p>
          </div>
        }
        <p>{details}</p>
      </Modal.Body>
    </Modal>
  );
}

export default LaunchItemModal;