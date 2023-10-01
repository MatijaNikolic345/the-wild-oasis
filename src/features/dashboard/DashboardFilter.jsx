import styled from "styled-components";
import Filter from "../../ui/Filter";
import { useSearchParams } from "react-router-dom";
import FilterButton from "../../ui/FilterButton";
const FilterSortDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;
function DashboardFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleFilterChange(e) {
    searchParams.set("last", e.target.value);
    setSearchParams(searchParams);
  }
  const last = searchParams.get("last") || "7";
  return (
    <FilterSortDiv>
      <Filter>
        <FilterButton
          value="7"
          disabled={last === "7"}
          type={last === "7" ? "active" : "not-active"}
          onClick={handleFilterChange}
        >
          Last 7 days
        </FilterButton>
        <FilterButton
          value="30"
          disabled={last === "30"}
          type={last === "30" ? "active" : "not-active"}
          onClick={handleFilterChange}
        >
          Last 30 days
        </FilterButton>
        <FilterButton
          value="90"
          disabled={last === "90"}
          type={last === "90" ? "active" : "not-active"}
          onClick={handleFilterChange}
        >
          Last 90 days
        </FilterButton>
      </Filter>
    </FilterSortDiv>
  );
}

export default DashboardFilter;
