function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.author}</p>
      <button onClick={props.handleClick}>{props.likes}</button>
    </div>
  );
}

export default Post;
