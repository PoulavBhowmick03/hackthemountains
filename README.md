   # hackthemountains

![image](https://github.com/PoulavBhowmick03/hackthemountains/assets/76868488/2872d6bc-5f22-4799-9b19-881c4e676f89)



## Model description

This model is trained on a Symptoms to Disease [Dataset]("https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset"). 
The model takes in a symptom prompt and classifies the most probable disease from it. 


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


