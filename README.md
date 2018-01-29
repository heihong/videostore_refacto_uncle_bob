**Getting started**

* **JavaScript**

        - Aller dans le repertoire javascript:  cd javascript
        
       - Pour exécuter les tests depuis la ligne de commande: 
            - Depuis le repertoire test (cd  test),  tapez _mocha_ ou _npm test_
   
    Vous devriez voir apparaître :  
    
        VideoStore    
        √ test single NewRelease statement
        √ test dual NewRelease statement
        √ test single children statement
        √ test multiple regular statement
        
        4 passing (1ms)`
    
  Conseil:      
  
                Pour ré-exécuter automatiquement des tests :   `  mocha -w`
       
* **Java**

            - Aller dans le repertoire java:  cd java
  
            - Pour exécuter les tests depuis la ligne de commande:
                - Depuis le repertoire java (cd  java) puis : `gradle clean test`
                
Vous devriez voir apparaître :  
        
    fr.soat.cleancoders.VideoStoreTest > testDualNewReleaseStatement PASSED
  
    fr.soat.cleancoders.VideoStoreTest > testSingleChildrensStatement PASSED
    
    fr.soat.cleancoders.VideoStoreTest > testSingleNewReleaseStatement PASSED
    
    fr.soat.cleancoders.VideoStoreTest > testMultipleRegularStatement PASSED
    
    BUILD SUCCESSFUL in 2s
    4 actionable tasks: 4 executed
