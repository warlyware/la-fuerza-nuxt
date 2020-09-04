export default link => {
  return `//${link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}`;
}
