import styled from "styled-components";

import Heading from "../../ui/Heading";
import useCabins from "./useCabins";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

const StyledCabinsTable = styled.div`
  border: 1px solid var(--color-grey-200);
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 5px;
`;
const TableHeader = styled.header`
  display: grid;
  padding: 1.8rem 0rem;
  gap: 3.5rem;
  grid-template-columns: 0.7fr 1.8fr 2.2fr 1fr 1fr 1fr;
`;

function CabinsTable() {
  const { data: cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("discount") || "all";
  const sortType = searchParams.get("sortBy") || "name-asc";
  if (isLoading) return <Spinner />;
  let filteredCabins;
  if (filterType === "all") filteredCabins = cabins;
  if (filterType === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterType === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (sortType === "name-asc") filteredCabins.sort((a, b) => a.name - b.name);
  if (sortType === "name-desc") filteredCabins.sort((a, b) => b.name - a.name);
  if (sortType === "price-low")
    filteredCabins.sort((a, b) => a.regularPrice - b.regularPrice);
  if (sortType === "price-high")
    filteredCabins.sort((a, b) => b.regularPrice - a.regularPrice);
  if (sortType === "capacity-low")
    filteredCabins.sort((a, b) => a.maxCapacity - b.maxCapacity);
  if (sortType === "capacity-high")
    filteredCabins.sort((a, b) => b.maxCapacity - a.maxCapacity);
  return (
    <StyledCabinsTable>
      <TableHeader>
        <div></div>
        <Heading type="medium">Cabin</Heading>
        <Heading type="medium">Capacity</Heading>
        <Heading type="medium">Price</Heading>
        <Heading type="medium">Discount</Heading>
        <div></div>
      </TableHeader>
      {filteredCabins.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </StyledCabinsTable>
  );
}

export default CabinsTable;
