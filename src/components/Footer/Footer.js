import './Footer.css';


function Footer(){
    return(


        <footer className="text-center text-lg-start fixed-bottom">
            <div className="container d-flex justify-content-center py-4">
                <button type="button" className="btn btn-primary btn-sm btn-floating mx-2">
                    Facebook
                </button>
                <button type="button" className="btn btn-danger btn-sm btn-floating mx-2">
                    Youtube
                </button>
                <button type="button" className="btn btn-warning btn-sm btn-floating mx-2">
                    Instagram
                </button>
                <button type="button" className="btn btn-info btn-sm btn-floating mx-2">
                    Twitter
                </button>
            </div>


            <div className="text-center text-white p-3 legend">
            © 2022 Copyright:
                <a className="text-white" href="https://github.com/diegox-mazo/maku-ecomerce-react-js"> maku-ecomerce-react-js</a>
            </div>

        </footer>

    );
}

export default Footer;