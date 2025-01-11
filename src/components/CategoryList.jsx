import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <div className="list" role="list">
      {catalog.map((el, index) => (
        <CategoryItem key={`${el.idCategory}-${index}`} {...el} />
      ))}
    </div>
  );
}

export { CategoryList };
