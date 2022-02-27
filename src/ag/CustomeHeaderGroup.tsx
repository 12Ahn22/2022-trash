import React, { useEffect, useState } from 'react'


// 이게 헤더 컴포넌트인데 이렇게 만들어서 그냥 전달만해주면댐
const CustomeHeaderGroup = (props:any) => {
  const [expandState, setExpandState] = useState('expanded');

  // 펼침은 필요 없음
  // const expandOrCollapse = () => {
  //   let currentState = props.columnGroup.getProvidedColumnGroup().isExpanded();
  //   props.setExpanded(!currentState);
  // };

  // const syncExpandButtons = () => {
  //   setExpandState(
  //     props.columnGroup.getProvidedColumnGroup().isExpanded()
  //       ? 'expanded'
  //       : 'collapsed'
  //   );
  // };

  useEffect(() => {
    // 항상펼쳐놔야함
    props.setExpanded(true);

    // let currentState = props.columnGroup.getProvidedColumnGroup().isExpanded();

    props.columnGroup
      .getProvidedColumnGroup()
      // .addEventListener('expandedChanged', syncExpandButtons);
    // syncExpandButtons();

    return () => {
      props.columnGroup
        .getProvidedColumnGroup()
        // .removeEventListener('expandedChanged', syncExpandButtons);
    };
  }, [props, props.columnGroup]);

  return (
    <div className="ag-header-group-cell-label">
      <div className="customHeaderLabel">{props.displayName} 디스플레이</div>
      {/* 그럼 아래 그룹은 어케 바꿈? */}
      
    </div>
  );
}

export default CustomeHeaderGroup