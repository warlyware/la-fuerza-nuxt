export default link => {
  if (link.includes('sms:')) {
    return `${link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}`;
  }
  return `//${link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}`;
}
