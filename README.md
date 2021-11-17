# LIBRARY APP

## Funkcie :

Nižšie nájede opis, čo bude aplikácia zvládať

### Knižnica

- Vytváranie knižnice
- Editovanie knižnice
- Vymazanie knižnice

### Študent

- Vytváranie študentov v knižnici
- Vylúčenie študentov z knižnice
- Editovanie študentov v knižnici
- História referencie študenta
- Vytváranie referencie kniha-student max 30 dní
- Vracanie knihy

### Kniha

- Vytváranie knihy v knižnici
- Vylúčenie knihy z knižnice
- Editovanie knihy

## ENPOINTS FOR LIBRARY

- GET "/" - returns all libraries
- GET "/:\_id" - returns library with specified id
- POST "/" - add new Library, required params: **_name_**, **_address_**
- PUT "/" - update library, required params: **_\_id_**,**_name_**, **_address_**
- DELETE "/" - delete library, required param: **_\_id_**
