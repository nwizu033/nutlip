import styles from '../styles/Footer.module.css';
import logo from '../../public/nutlipLogo.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.logo_section}>
                <Image src={logo} width={128} height ={40}/>
                <p>Copyright &copy; 2023 Nutlip inc.</p>
            </div>
            <div className={styles.contact}>
                <h2>CONTACT</h2>
                <p>2 Windsor Road BELFAST, <br/> BT21, United Kingdom</p>
                <p>+44 7911 123456</p>
                <p>contact@nutlip.com</p>
            </div>
            <div className={styles.quick_links}>
                <h2>QUICK LINKS</h2>
                <p>Home</p>
                <p>About</p>
                <p>project</p>
            </div>
            <div className={styles.legal_links}>
                <h2>LEGAL LINKS</h2>
                <p>Terms</p>
                <p>Conditions</p>
                <p>Policy</p>
            </div>
            <div className={styles.social_media}>
                <h2>SOCIAL MEDIA</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>YouTube</p>
                <p>LinkedIn</p>
            </div>
            
        </div>

    );
}

export default Footer;