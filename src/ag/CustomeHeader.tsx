'use strict';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CustomeHeaderGroup from './CustomeHeaderGroup';

const GridExample = () => {
  // 위에는 스타일이고
  const containerStyle = useMemo(() => ({ width: '100%', height: '1000px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  // 데이터
  const [rowData, setRowData] = useState();

  const components = useMemo(() => {
    return {
      agColumnHeader: TestheaerComponent,
    };
  }, []);

  // 이게 컬럼 그리는 거고
  const [columnDefs, setColumnDefs] = useState([
    // 컬럼 def를 그룹화 시켜야되네?
    {
      headerName: 'Athlete Details',
      headerGroupComponent: CustomeHeaderGroup ,
      children: [
        { field: 'athlete', width: 150,headerComponentParams:(params:any)=>(params),},
        { field: 'age', width: 90, columnGroupShow: 'open' },
        {
          field: 'country',
          width: 120,
          columnGroupShow: 'open',
        },
      ],
    },
    // 그룹화
    {
      headerName: 'Medal details',
      headerGroupComponent: CustomeHeaderGroup,
      children: [
        { field: 'year', width: 90 },
        { field: 'date', width: 110 },
        {
          field: 'sport',
          width: 110,
          columnGroupShow: 'open',
        },
        {
          field: 'gold',
          width: 100,
          columnGroupShow: 'open',
        },
        {
          field: 'silver',
          width: 100,
          columnGroupShow: 'open',
        },
        {
          field: 'bronze',
          width: 100,
          columnGroupShow: 'open',
        },
        {
          field: 'total',
          width: 100,
          columnGroupShow: 'open',
        },
      ],
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 100,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          // 헤더
          components={components}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default GridExample;

// 그냥 셀렌더러 사용하듯이 하면되네
const TestheaerComponent = (params:any)=>{
  return<div>{params.displayName}</div>
}
