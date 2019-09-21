import React, { createContext, useState, useEffect } from "react";
import LazyLoad from "vanilla-lazyload";

// Create a new React context
const Context = createContext();

const options = { elements_selector: ".lazyImage__img" };

// Export the context provider
export const LazyImageProvider = ({ children }) => {
    // Create the state that will hold the LazyLoad API
    const [lazyLoad, setLazyLoad] = useState(null);

    // Prepare for doing stuff on mount and unmount
    useEffect(() => {
        if (!lazyLoad) setLazyLoad(new LazyLoad(options));
        // Clean up on unmount
        return () => lazyLoad && lazyLoad.destroy();
    }, [lazyLoad]);

    // Expose our LazyLoad API to its children components
    return <Context.Provider value={lazyLoad}>{children}</Context.Provider>;
};

export const withLazyImageContext = Component => props => (
    <Context.Consumer>
        {context => <Component {...props} lazyLoad={context} />}
    </Context.Consumer>
);