import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const category = [
    "Все",
    "Мясные",
    "Вегетерианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {category.map((el, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
