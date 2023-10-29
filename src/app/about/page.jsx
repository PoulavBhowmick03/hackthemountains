import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}>
            <br />
            <div className={styles.title}>Who Are We?</div>
            <br />
            <br />Welcome to Chikitsalay, your trusted companion on your journey to better health.
            <br />we are  passionate and committed to improving healthcare accessibility, information,
            <br />and personalization. We are passionate about enhancing healthcare accessibility, information,
            <br /> and personalization &amp; helping you find the nearest health centers when you need them the most.
          </p>
          <br />
          <div className={styles.title}>Our Vision</div>
          <p className={styles.desc}>
            <br />At Chikitsalay, we envision a world where healthcare is a fundamental right
            <br />accessible to all through technology and innovation.
            <br />Our platform empowers you to make informed health decisions.
          </p>
          <br />
          <div className={styles.title}>Our Values</div>
          <p className={styles.desc}>
            <br />Accessibility: We're dedicated to universal healthcare access, irrespective of location or status.
            <br />Accuracy: We prioritize accuracy in our disease predictions to provide users with reliable information.
            <br />Empowerment: Individuals can take control of their health with the tools and information they need.
            <br />Privacy: Privacy and data security are paramount to us. We adhere to strict privacy and data protection policies to ensure your information is safe and confidential.
            <br />
            <br />Our platform empowers you to make informed health decisions.
          </p>
          
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            <br />
            <div className={styles.title}>Symptom-Based Disease Prediction</div>
            <br />
            <br />⦾ Chikitsalay allows users to input their symptoms.
            <br />
            <br />⦾ Then feeds the info into a model based on a sophisticated algorithm.
            <br />
            <br />⦾ It then predicts the most probable diseases associated with those symptoms.
            <br />
            <br />⦾ This feature can provide valuable insights into your health and help you take appropriate actions.
            <br />
            <br />
            <div className={styles.title}>Nearby Health Centers Map</div>
            <br />
            <br />⦾ Chikitsalay's map feature uses your location data to get your location.
            <br />
            <br />⦾ It then uses it to display nearby health centers, hospitals, clinics, and pharmacies.
            <br />
            <br />⦾ This makes it easy for you to find the closest healthcare facilities.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
