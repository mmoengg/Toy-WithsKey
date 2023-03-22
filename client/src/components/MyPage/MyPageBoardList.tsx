import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageBoardComment from './MyPageBoardComment';

function MyPageBoardList() {
  const writeBoardsList = useAppSelector(
    state => state.auth.userInfo.writeBoards,
  );

  return (
    <>
      {writeBoardsList
        ? writeBoardsList.map(ele => (
            <MyPageBoardComment
              key={ele.boardId}
              ele={ele}
              board="board"></MyPageBoardComment>
          ))
        : null}
    </>
  );
}

export default MyPageBoardList;
