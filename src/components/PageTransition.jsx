import React from 'react';
import { useLocation, Routes, Route } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedRoutes = ({ children }) => {
    const location = useLocation();
  
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            {/* We need to recursively wrap each Route's element with PageTransition 
                OR we can just assume the consumer passes standard <Route> elements and we clone/modify them?
                Actually, simpler approach: The consumer passes children which are <Routes> or <Route>s.
                But `Routes` controls rendering.
                
                Better approach for direct usage inside App.jsx:
                We make App.jsx handle the AnimatePresence.
            */}
             {React.Children.map(children, child => {
                 if (React.isValidElement(child)) {
                     // We wrap the element prop in PageTransition
                     const originalElement = child.props.element;
                     return React.cloneElement(child, {
                         element: <PageTransition>{originalElement}</PageTransition>
                     });
                 }
                 return child;
             })}
        </Routes>
      </AnimatePresence>
    );
  };
export default PageTransition;