import styles from '../styles/Navbar.module.css';
import logo from '../../public/nutlipLogo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navabr = () => {
    const [currentAccount, setCurrentAccount] = useState();
    
    const connectWallet = async () => {
        try{
            const { ethereum } = window;
    
            if(!ethereum) {
                alert("Please install metamask for easy experience ");
                
            }
    
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
    
            setCurrentAccount(accounts[0]);
    
        } catch (error) {
            console.log(error);
        }
    
      }
    
      const shortenAddress = (currentAccount) => `${currentAccount.slice(0, 3)}...${currentAccount.slice(currentAccount.length - 4)}`
    
    return(
        <div className={styles.nav}>
            <div className={styles.logo_section}>
                <Image src={logo} width={128} height ={40}/>
            </div>
            <div className={styles.nav_menu}>
                <Link href='/'>Home</Link>
                <li>Register</li>
                <li>SignIn</li>
                <Link href='/list-property'><button className={styles.listing}>List property</button></Link>
                {!currentAccount ?  <button onClick={connectWallet} className={styles.btn}>Connect Wallet</button> :
                  <button className={styles.btn}>Conn: {shortenAddress(currentAccount)}</button>}

            </div>
        </div>
    );
}

export default Navabr;