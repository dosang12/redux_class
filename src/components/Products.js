import React from "react";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div className="items">
      <p>상품갯수:{props.count}</p>
      <button>주문하기</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.count });
export default connect(mapStateToProps)(Products);
