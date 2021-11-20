import React from "react";
import { AddNewButton, AddNewActions } from "./Addnew";
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

export const Library = () => {
  const addLib = (param) => console.log(param);
  return (
    <>
      <AddNewButton>
        <AddNewActions addLib={addLib} />
      </AddNewButton>
    </>
  );
};
