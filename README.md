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

## ENPOINTS FOR LIBRARY - "/library" +

- GET "/" - returns all Libraries
- GET "/:\_id" - returns Library with specified id
- POST "/" - add new Library, required params: **_name_**, **_address_**
- PUT "/" - update Library, required params: **_\_id_**, **_name_**, **_address_**
- DELETE "/" - delete Library, required param: **_\_id_**

## ENPOINTS FOR BOOK - "/book" +

- GET "/" - returns all books
- GET "/:\_id" - returns Book with specified id
- POST "/" - add new Book, required params: **_name_**, **_quantity_**
- PUT "/" - update Book, required params: **_\_id_**, **_name_**, **_quantity_**
- DELETE "/" - delete Book, required param: **_\_id_**
