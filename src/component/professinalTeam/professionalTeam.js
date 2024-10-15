import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ProfessionalTeam = ({data}) => {

    const navigate = useNavigate();
    
    const handleCardClick = (navigateTo) => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    };
    return (
        <>
            <div className="hospitalstaff mb-4">
                <Container>
                <div className="row card-container justify-content-center">
                    {data.map((card, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card my-4" onClick={() => handleCardClick(card.navigate)}>
                                <img src={card.img} className="card-img" />
                                <div className="line">
                                    <img src={card.innerImg} className="inner-img border border-light p-3 rounded-circle border-3" />
                                    <p className="text-center inner-text">{card.text}</p>
                                    <p className="inner-text1">{card.listings}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </Container>
            </div>
        </>
    )
}
export default ProfessionalTeam;