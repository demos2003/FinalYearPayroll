import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function PDF2({item}) {
    let lateStatus = item.late ? "Late" : "On Time";
    const dateString = item.date;
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const statusStyle = {
      color: item.late ? "red" : "green",
    };

    return(
        <Document>
      <Page>
    <View>
       <Text style={{color:"red"}}>{formattedDate}</Text>
     
       </View>
      </Page>
    </Document>
    )
}

export default PDF2