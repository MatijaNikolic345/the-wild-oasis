import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import FilterButton from "../../ui/FilterButton";
import Sort from "../../ui/Sort";
import SortOption from "../../ui/SortOption";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
const FilterSortDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

function CabinsHeading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const discount = searchParams.get("discount") || "all";

  function handleSortChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  function handleFilterChange(e) {
    searchParams.set("discount", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Row>
        <Heading>All cabins</Heading>
        <FilterSortDiv>
          <Filter>
            <FilterButton
              value="all"
              disabled={discount === "all"}
              type={discount === "all" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              All
            </FilterButton>
            <FilterButton
              value="no-discount"
              disabled={discount === "no-discount"}
              type={discount === "no-discount" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              No discount
            </FilterButton>
            <FilterButton
              value="with-discount"
              disabled={discount === "with-discount"}
              type={discount === "with-discount" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              With discount
            </FilterButton>
          </Filter>
          <Sort onChange={handleSortChange}>
            <SortOption value="name-asc">Sort by name (A-Z)</SortOption>
            <SortOption value="name-desc">Sort by name (Z-A)</SortOption>
            <SortOption value="price-low">Sort by price (low first)</SortOption>
            <SortOption value="price-high">
              Sort by price (high first)
            </SortOption>
            <SortOption value="capacity-low">
              Sort by capacity (low first)
            </SortOption>
            <SortOption value="capacity-high">
              Sort by capacity (high first)
            </SortOption>
          </Sort>
        </FilterSortDiv>
      </Row>
    </>
  );
}

export default CabinsHeading;
