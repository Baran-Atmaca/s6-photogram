/* Post componentından buraya neleri props olarak gönderdin? Onları burada kullan. */
export default function PostComment({ comment }) {
  /* yorum sahibinin adı ve yorumu props'tan kullanılmalı */
  const { username, text } = comment;
  return (
    <p className="post-comment">
      <span>{username}</span>
      <span className="sep">&middot;</span>
      {text}
    </p>
  );
}
