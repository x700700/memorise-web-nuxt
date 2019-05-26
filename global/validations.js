
export const validateId = (id) => {
  const looksLikeId = id && id.match(/^\w[^ _-]+$/g);
  return (id && id.length === 24 && looksLikeId);
};
