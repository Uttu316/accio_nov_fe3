const ProductFilters = () => {
  return (
    <div>
      <FilterItem label="All" value="all" selected={null} onFilter={null} />
      <FilterItem label="All" value="all" selected={null} onFilter={null} />
      <FilterItem label="All" value="all" selected={null} onFilter={null} />
      <FilterItem label="All" value="all" selected={null} onFilter={null} />
      <FilterItem label="All" value="all" selected={null} onFilter={null} />
    </div>
  );
};

const FilterItem = ({ label, value, onFilter, selected }) => {
  return <button onClick={() => onFilter(value)}>{label}</button>;
};
export default ProductFilters;
