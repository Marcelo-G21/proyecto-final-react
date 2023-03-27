import { StarFill, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => {
  const starList = [];

  const starFillCount = rating;

  const emptyStarCount = 5 - starFillCount;

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return (
    <div>{starList}</div>
  )
}

export default FiveStarRating