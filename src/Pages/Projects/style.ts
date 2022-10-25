import styled from "styled-components"

interface IProps {
  dark: boolean
  palette: any
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px;

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .card__div--tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`
