import AuthRequired from './components/AuthRequired';
import Home from './components/Home';
import Layout from './components/Layouts/Layout';
import Login from './components/Login';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Registration from './components/Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login/>} />
          <Route path='registration' element={<Registration/>} />
          <Route element={<AuthRequired/>}>
            <Route path='post' element={<Post/>} />
            <Route path='post/:id' element={<PostDetail/>} />
          </Route>
          
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
