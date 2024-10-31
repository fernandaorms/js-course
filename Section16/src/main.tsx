import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';
import { SinglePost } from './components/SinglePost';


import './styles/global.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/posts' element={<Posts />}>
                    <Route path=':id' element={<SinglePost />} />
                </Route>
                <Route path='/redirect' element={<Redirect />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
