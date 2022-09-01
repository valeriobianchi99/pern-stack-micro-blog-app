import React, { useState } from 'react';
import Nav from './Nav';
import StyledSignedInApp from '../components/styled/SignedInApp.styled';
import { Route, Routes } from 'react-router-dom';
import Account from './Account';
import Feed from './Feed';
import PostModal from './PostModal';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const SignedInApp = () => {

  const [modalOpen, setModal] = useState(false)
  return (
    <QueryClientProvider client={queryClient}>
      <StyledSignedInApp>
        <Nav setModal={setModal} />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/account' element={<Account />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
        {modalOpen && <PostModal setModal={setModal} />}
      </StyledSignedInApp>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default SignedInApp