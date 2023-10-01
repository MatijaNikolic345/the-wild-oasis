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

function BookingsHeading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";

  function handleSortChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  function handleFilterChange(e) {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Row>
        <Heading>All bookings</Heading>
        <FilterSortDiv>
          <Filter>
            <FilterButton
              value="all"
              disabled={status === "all"}
              type={status === "all" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              All
            </FilterButton>
            <FilterButton
              value="checked-out"
              disabled={status === "checked-out"}
              type={status === "checked-out" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              Checked out
            </FilterButton>
            <FilterButton
              value="checked-in"
              disabled={status === "checked-in"}
              type={status === "checked-in" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              Checked in
            </FilterButton>
            <FilterButton
              value="unconfirmed"
              disabled={status === "unconfirmed"}
              type={status === "unconfirmed" ? "active" : "not-active"}
              onClick={handleFilterChange}
            >
              Unconfirmed
            </FilterButton>
          </Filter>
          <Sort onChange={handleSortChange}>
            <SortOption value="startDate-asc">
              Sort by date (recent first)
            </SortOption>
            <SortOption value="startDate-desc">
              Sort by date (earlier first)
            </SortOption>
            <SortOption value="totalPrice-low">
              Sort by amount (low first)
            </SortOption>
            <SortOption value="totalPrice-high">
              Sort by amount (high first)
            </SortOption>
          </Sort>
        </FilterSortDiv>
      </Row>
    </>
  );
}

export default BookingsHeading;
