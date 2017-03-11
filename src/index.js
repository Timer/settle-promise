//@flow

function settle(val: Iterable<Promise>): Promise {
  return Promise.all(
    val.map(p =>
      p
        .then(value => ({
          isFulfilled: true,
          isRejected: false,
          value,
        }))
        .catch(reason => ({
          isFulfilled: false,
          isRejected: true,
          reason,
        })))
  );
}

export { settle };
export default settle;
