

const Student = (props) => {
  return (
    <>
      <div className='component1'>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </div>
    </>
  );
}

export default Student