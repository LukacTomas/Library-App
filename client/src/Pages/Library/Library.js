import React from "react";
import { AddNewButton, AddNewActions } from "./Addnew";
import { Libraries } from "./LibrariesTable";
import { LIBRARY, useFetchDeleteItem } from "../../Services/Api";

//import { useFetchDeleteItem } from "../../Services/Api/";
/**
 * Library page component
 * - displaying all libraries
 * - adding new library
 * - deleting library
 * - selecting library
 *
 * TODO
 * optimaze for many data
 * add search function
 */

export const Library = ({ data }) => {
  const deleteItem = useFetchDeleteItem();

  /*const deleteItem = React.useCallback(
    (lib, _id) => {
      const del = deleteItemFromDb(LIBRARY, _id);
      console.log(del);
    },
    [deleteItemFromDb]
  );*/

  // TODO add to mongo
  const addLib = (param) => console.log(param);

  // TODO change route
  const selectLib = (_id) => {
    console.log("selecting", _id);
  };

  // TODO delete from mongo
  const deleteLib = (_id) => {
    if (!_id) return;
    console.log("deleting");
    console.log(deleteItem);
    const del = deleteItem(LIBRARY, _id);
    console.log(del);
  };
  return (
    <>
      <AddNewButton>
        <AddNewActions addLib={addLib} />
      </AddNewButton>
      <Libraries
        data={data}
        selectRow={selectLib}
        deleteRow={deleteLib}
      ></Libraries>
    </>
  );
};
