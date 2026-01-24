import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`} >
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      
    </nav>
  );
};

export default Navigation;