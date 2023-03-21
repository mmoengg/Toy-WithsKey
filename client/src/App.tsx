import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import MainLayout from './components/layout/MainLayout';
import BaseLayout from './components/layout/BaseLayout';
import DrinksList from './pages/DrinksList';
import DrinksDetail from './pages/DrinksDetail';
import ArticleList from './pages/ArticleList';
import MyPage from './pages/MyPage';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardCreate from './pages/BoardCreate';
import SignUp from './pages/SignUp';
import Tags from './pages/Tags';
import ArticleDetail from './pages/ArticleDetail';
import { useAppDispatch } from './redux/hooks/hooks';
import { loginSuccess } from './redux/slice/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();

  const initializeUserInfo = async () => {
    try {
      const res = await axios.get(`/members/mypage`);
      if (res.status === 200) {
        const userInfo = res.data;
        dispatch(loginSuccess({ userInfo: userInfo }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    initializeUserInfo();
  });

  return (
    <Routes>
      <Route element={<MainLayout img />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route element={<MainLayout bgColor />}>
        <Route path="/board/create" element={<BoardCreate />} />
        <Route path="/board/edit/:editId" element={<BoardCreate />} />
        <Route path="/drinks/list" element={<DrinksList />} />
        <Route path="/drinks/:drinkId" element={<DrinksDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tags/:tagid" element={<Tags />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path="/article" element={<ArticleList />} />
        <Route path="/article/detail/articleId" element={<ArticleDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      <Route element={<BaseLayout bgColor />}>
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/detail/:boardId" element={<BoardDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
