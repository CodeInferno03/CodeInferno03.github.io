/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import PropTypes from 'prop-types'

const BoxCSSContext = React.createContext();

export const BoxCSSProvider = ({ children }) => {
    const boxCSS = {
        'width': 650,
        'height': 550,
        'fontFamily': 'Fira Sans, Arial, Monospace'
    };

    return (
        <BoxCSSContext.Provider value={boxCSS}>
            {children}
        </BoxCSSContext.Provider>
    );
};

// proptypes validation for linter
BoxCSSProvider.propTypes = {
    children: PropTypes.any
}

export const useBoxCSS = () => React.useContext(BoxCSSContext);





