import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './PDF';

function PdFView() {
  return (
    <PDFViewer style={{width: 570, height:500, marginTop:10}}>
      <MyDocument />
    </PDFViewer>
  );
}

export default PdFView;
