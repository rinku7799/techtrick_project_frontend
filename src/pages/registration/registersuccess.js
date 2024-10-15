import registerImage from '../../assets/registerimage.png';
import tick from '../../assets/tick.png';

const RegisterSuccess = () => {
    return (
        <>
            <div className="container mt-2 mb-5">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <div className="shadow p-4 mt-5 text-center" style={{ borderRadius: "15px" }}>
                            <img src={tick} alt="Success" className="img-fluid" width={"200px"} />
                            <p className='fs-3 fw-bolder'>Thank You For Registration</p>
                            <p className='fs-5' style={{color:"#8A8A8A"}}>Congratulations, your account has been successfully created.</p>
                            <button className='btn w-100 mt-3 btn-primary p-3'>Ok</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img src={registerImage} alt="Login" className="img-fluid h-75 w-75 mt-5" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterSuccess;
