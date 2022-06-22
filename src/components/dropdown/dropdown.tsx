import { MouseEvent, useRef } from "react";
import { IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import "./dropdown.scss";

function Dropdown({ navigationList }: { navigationList: string[] }) {
  const [state, dispatch] = useStore();
  const { currentType } = state;
  const refOption = useRef(null);

  const handleChangeType = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    dispatch({
      type: IMAGES_ACTIONS.CHANGE_TYPE,
      cardType: target.textContent,
    });
  };

  const onClickOption = () => {
    const option = refOption.current;
    const optionList = option.querySelector(".dropdown-option-list");
    option.classList.toggle("dropdown-option_active");
    optionList.classList.toggle("dropdown-option-list_active");
  };

  return (
    <div className="dropdown" onClick={onClickOption}>
      <div className="dropdown-container">
        <button
          onClick={onClickOption}
          className="dropdown-button"
          type="button"
        ></button>
        <p className="gallery__list-item dropdown-text">{currentType}</p>
      </div>
      <div ref={refOption} className="dropdown-option">
        <ul className="dropdown-option-list">
          {navigationList.map(
            (name) =>
              currentType !== name && (
                <li
                  key={name}
                  onClick={handleChangeType}
                  className="gallery__list-item dropdown-option-item"
                >
                  {name}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
