import "../Styles/Text.css";

function Text(props) {
  const firstText = (
    <>
      The <span className='blueText'>Most Complete</span> Job
      <br /> ☆ Listings In The World ☆
    </>
  );
  const secondText = `Discover the job you want at top companies`;
  return (
    <>
      <h1>{firstText} </h1>
      <p>{secondText}</p>
    </>
  );
}

export default Text;
