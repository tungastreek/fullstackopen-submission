const Notification = ({ isError, message }) => {
  const className = isError ? 'error' : 'notification';
  if (!message) {
    return null;
  }
  return (
    <div className={className}>
      { message }
    </div>
  );
};

export default Notification;