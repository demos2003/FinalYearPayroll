import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


function MyDocument() {
  // Assign random values to the employee name, ID, and monthly pay


  // Define styles for the table
  const styles = StyleSheet.create({
    table: {
      display: "table",
      width: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#bfbfbf",
      marginBottom: 10,
    },
    row: {
      display: "table-row",
      borderBottomWidth: 1,
      borderColor: "#bfbfbf",
    },
    cell: {
      display: "table-cell",
      padding: 5,
      textAlign: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#bfbfbf",
    },
    headerCell: {
      backgroundColor: "#bfbfbf",
      color: "#fff",
      fontWeight: "bold",
    },
  });

  return (
    <Document>
      <Page>
    
       
      </Page>
    </Document>
  );
}

export default MyDocument;

