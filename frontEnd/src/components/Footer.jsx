import styles from "../style";


const Footer = () => (
    <footer>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
    <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 SecurasTechnologies. All Rights Reserved.
      </p>
    </div>
  </section>
  </div>
  </div>
  </footer>
);

export default Footer;
