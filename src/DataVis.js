import React from 'react';
import PropTypes from 'prop-types';

export default function DataVis(props) {
  const { data } = props;
  return (
    <>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  );
}

DataVis.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
