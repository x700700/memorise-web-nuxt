
export const validateId = (id) => {
  const looksLikeId = id && id.match(/^\w[^ _-]+$/g);
  if (id && id.length === 24 && looksLikeId) {
    return true;
  } else {
    console.error('wrong id.');
    return false;
  }
};
