const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString(navigator.language, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;