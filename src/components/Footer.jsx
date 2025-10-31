import '../reset.css';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="footer-left-side"></div>
            <div className="footer-right-side">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Plantus | All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
