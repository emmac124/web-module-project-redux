import React from 'react';
import { addFeature } from './../actions/additionalFeaturesAction';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} {props.feature.price}
    </li>
  );
};


const mapStateToProps = state => {
  // console.log("additionalFeature", state);
  return({
    additionalFeatures: state.additionalFeatures
  })
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
