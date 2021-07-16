import styled from "styled-components";

const Card = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    width: 200px;
    height: 300px;
    background-color: red;
    border-radius: 10px;
    object-fit: cover;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    :hover{
        border: 1px solid red;
        width: 210px;
        height: 310px;
    }

`;

const BookCard = ({ onClick, photo }) => <Card onClick={onClick} photo={photo} />;

export default BookCard;