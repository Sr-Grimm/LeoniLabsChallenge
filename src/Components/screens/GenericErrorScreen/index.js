import React from "react";
import Text from "../../atoms/Text";
import Container from "../../atoms/Container";
import PropTypes from 'prop-types'


const GenericErrorScreen = ({errorMessage}) => {
  return(
      <Container flexD="column" justify="center" align="center" width="100%" height="100%">
        <Text size="28px" color="white">
          ¡An error has ocurred!
        </Text>
        <Text size="22px" color="white">
          {errorMessage}
        </Text>
      </Container>
  );
};

GenericErrorScreen.displayName = "GenericErrorScreen";

GenericErrorScreen.propTypes = {
  errorMessage: PropTypes.string
};

GenericErrorScreen.defaultProps = {
  errorMessage: "uknown error."
};

export default GenericErrorScreen;