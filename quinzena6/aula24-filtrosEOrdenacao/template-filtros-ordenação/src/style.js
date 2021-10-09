import styled from "styled-components";

export const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

export const FiltersDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;


`