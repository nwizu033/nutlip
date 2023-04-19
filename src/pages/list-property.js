import styles from '../styles/list-property.module.css';

const listProperty = () => {

    return(
        <div className={styles.listing}>
            <h1>List Your Property</h1>
            <div className={styles.form}>
            <input type='text' placeholder='type of property'/>
            <input type='number' placeholder='Price'/>
            <input type='file' placeholder='upload file'/>
            <p>NB: Only Agents can list property. <span>Register as an agent</span></p>
            <button>List property</button>
          </div>

          
        </div>
    );

}
export default listProperty;