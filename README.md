# Video Store Kata, Uncle Bob Style

## Getting started

Le code source pour ce kata est disponible dans plusieurs langages :

### CSharp

- Aller dans le répertoire `csharp`
- Ouvrir la solution `Soat.CleanCoders.VideoStore.sln`
- Elle comporte 2 projets : l'un pour les classes du domain, l'autre pour les tests.
- Les tests utilisent [xUnit](https://xunit.github.io/).
- Depuis le "Test Explorer" (si vous êtes dans Visual Studio), lancer tous les tests. 4 tests doivent être découverts et être verts :
  - Soat.CleanCoders.VideoStore.Tests
    - ✔️ Tests.TestDualNewReleaseStatement
    - ✔️ Tests.TestMultipleRegularStatement
    - ✔️ Tests.TestSingleChildrensStatement
    - ✔️ Tests.TestSingleNewReleaseStatement

### Java

- Aller dans le répertoire `java`
- Ouvrir une console
- Pour exécuter les tests depuis la ligne de commande :
  <br> `gradle clean test`
- Vous devriez voir apparaître :

```txt
fr.soat.cleancoders.VideoStoreTest > testDualNewReleaseStatement PASSED

fr.soat.cleancoders.VideoStoreTest > testSingleChildrensStatement PASSED

fr.soat.cleancoders.VideoStoreTest > testSingleNewReleaseStatement PASSED

fr.soat.cleancoders.VideoStoreTest > testMultipleRegularStatement PASSED

BUILD SUCCESSFUL in 2s
4 actionable tasks: 4 executed
```

### JavaScript

- Aller dans le répertoire `javascript`
- Ouvrir une console
- Installer les packages npm : `npm i` ou `yarn`
- Le moteur des tests unitaires est [mocha](https://mochajs.org/) :
  - Exécuter la commande `mocha` (ou `npm test`) en console pour lancer les tests en one shot. Vérifier l'obtention de 4 tests passants comme dans la sortie ci-dessous.
  - Utiliser ensuite `mocha -w` en mode watch : les tests sont lancés à chaque enregistrement d'un fichier.

```txt
  VideoStore
    ✔️ test single NewRelease statement
    ✔️ test dual NewRelease statement
    ✔️ test single children statement
    ✔️ test multiple regular statement

  4 passing
```

### TypeScript

- Aller dans le répertoire `typescript`
- Ouvrir une console
- Installer les packages npm : `npm i` ou `yarn`
- Le moteur des tests unitaires est [jest](https://facebook.github.io/jest/) combiné avec [ts-jest](https://github.com/kulshekhar/ts-jest) pour supporter les fichiers TypeScript :
  - Exécuter la commande `npm test` en console pour lancer les tests en one shot. Vérifier l'obtention de 4 tests passants comme dans la sortie ci-dessous.
  - Utiliser ensuite `npm run tdd` en mode watch : les tests sont lancés à chaque enregistrement d'une modification dans un fichier.

```txt
 PASS  src\videostore.spec.ts
  VideoStore
    ✔️ test single NewRelease statement
    ✔️ test dual NewRelease statement
    ✔️ test single children statement
    ✔️ test multiple regular statement

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.37s
Ran all test suites.
```

Note:

- La branche `rde-ts` contient le résultat d'un refactoring poussé (pendant plusieurs heures) du code TypeScript, effectué avec [Rider](https://www.jetbrains.com/rider/).
- Merci de ne le regarder qu'après le TP.
