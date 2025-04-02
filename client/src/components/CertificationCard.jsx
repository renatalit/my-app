import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

function CertificationCard({ certification }) {
  return (
    <>
        <Card className="card text-center mb-3" style={{ width: '19rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '12rem', backgroundColor: 'lightgrey' }}>
            <Card.Body>
                <h3 className="card-title">{certification.title}</h3>
                <p className="card-text">{certification.body}</p>
                <a href={certification.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </Card.Body>
        </Card>
    </>
  );
}

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationCard;