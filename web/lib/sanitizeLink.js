export default link => {
  if (!link) { return '' }
  if (link.includes('sms:')) {
    return `${link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}`;
  }
  return `//${link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}`;
}
