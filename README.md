# Chikitsalay - Your Health Companion

Chikitsalay is a user-friendly website designed to help you identify potential diseases based on the symptoms you provide. In addition to providing disease predictions, Chikitsalay also offers a map feature that locates nearby health centers and hospitals, making it a one-stop solution for your health needs. This README file provides an overview of Chikitsalay and instructions on how to use its features effectively.

## Table of Contents

-   Features
-   Getting Started
-   Usage
-   Contributing
-   License

## Features

### 1. Symptom-Based Disease Prediction

Chikitsalay allows users to input their symptoms, and based on a sophisticated algorithm, it predicts the most probable diseases associated with those symptoms. This feature can provide valuable insights into your health and help you take appropriate actions.

**Symptom-Based Disease Prediction:**

-   Visit the Chikitsalay website at [chikitsalay.co](https://chikitsalay.co).
-   Sign-Up or Login using your email id.
-   Go to the "Dashboard" on the top right of the navigation bar.
-   Click on the "Health Checkup"  on the Dashboard.
-   Enter the symptoms you are experiencing in the provided text fields.
-   Click the "Predict"  button.
-   Chikitsalay will provide you with a list of probable diseases based on your symptoms and also their probability.

### 2. Nearby Health Centers Map

Chikitsalay's map feature uses your location data to display nearby health centers, hospitals, clinics, and pharmacies. This makes it easy for you to find the closest healthcare facilities in case you need immediate medical attention or advice.
** Health Centers Nearby Map:**

-   Visit the Chikitsalay website at [chikitsalay.co](https://chikitsalay.co).
-   Sign-Up or Login using your email id.
-   Go to the "Dashboard" on the top right of the navigation bar.
-   Click on the "Health Centers Nearby"  on the Dashboard.
-   Chikitsalay will request access to your location. Allow the website to access your location data.
-   The map will display all the nearby health centers, hospitals, clinics and also the distance from your location for your convenience.
 
## Working Flowchart Diagram
![image](https://github.com/PoulavBhowmick03/hackthemountains/assets/76868488/2872d6bc-5f22-4799-9b19-881c4e676f89)



## Model description

#### This model is trained on a Symptoms to Disease [Dataset](https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset). 
#### The model takes in a symptom prompt and classifies the most probable disease from it. 


### Training results

| Train Loss | Train Accuracy | Validation Loss | Validation Accuracy | Epoch |
|:----------:|:--------------:|:---------------:|:-------------------:|:-----:|
| 2.6613     | 0.2954         | 1.7206          | 0.7167              | 0     |
| 1.1325     | 0.8491         | 0.6683          | 0.9000              | 1     |
| 0.4055     | 0.9750         | 0.2890          | 0.9417              | 2     |
| 0.1551     | 0.9972         | 0.1912          | 0.9667              | 3     |
| 0.0803     | 1.0            | 0.1296          | 0.9583              | 4     |


### Framework versions used are

- Transformers 4.28.1
- TensorFlow 2.12.0
- Tokenizers 0.13.3



