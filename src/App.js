import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import { Suspense } from 'react';
import Loading from './components/Loading';
import PageNotFound from './pages/PageNotFound';

// Lazy loading Category component
const Category = React.lazy(() => import('./pages/Category'))

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/mens-clothing'
          element={
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path='/womens-clothing'
          element={
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          }
        />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
