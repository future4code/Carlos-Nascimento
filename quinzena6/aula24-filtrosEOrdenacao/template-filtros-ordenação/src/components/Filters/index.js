import { FiltersDiv } from "../../style";

export default function Filters(props) {
  return (
    <FiltersDiv>
      <input
        type="text"
        placeholder="Pesquisar"
        value={props.title}
        onChange={props.updateTitle}
      />
      <div>
      <input
        type="number"
        placeholder="Preço Mínimo"
        value={props.minPrice}
        onChange={props.updateMinPrice}
      />

      <input
        type="number"
        placeholder="Preço Máximo"
        value={props.maxPrice}
        onChange={props.updateMaxPrice}
      />
      </div>
      <div>
         <label htmlFor="sorte">Ordenar por:</label>
        <select
          name="sort"
          value={props.sortingParameter}
          onChange={props.updateSortingParameter}
        >
          <option value="title">Título</option>
          <option value="price">Preço</option>
          <option value="dueDate">Prazo</option>
        </select>

        <select name="order" value={props.order} onChange={props.updateOrder}>
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
      </div>
    </FiltersDiv>
  );
}
