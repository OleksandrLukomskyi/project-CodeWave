import { useSelector, useDispatch } from "react-redux";
import css from "./CopyBoardList.module.css";
import { selectBoard } from "../../redux/boards/selectors";
import { getBoard } from "../../redux/boards/operations";

export default function BoardList({ handleRender }) {
  const boards = useSelector(selectBoard);
  // const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <ul className={css.boardList}>
        {boards.map((item) => {
          return (
            <li className={css.boardItem} key={item._id}>
              <button
                title={item.title}
                type="button"
                // При кліку передаємо id і title(якщо потрібен) у CopySideBar.jsx
                onClick={() => handleRender(item.title, item._id)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
