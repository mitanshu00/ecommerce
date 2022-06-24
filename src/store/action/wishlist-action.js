import { WhishlistActions } from "../slice/whishlist-slice";

export const clearWishItems = () => {
  return (dispatch) => {
    dispatch(
      WhishlistActions.replaceWhishItems({
        wishItems: [],
        itemIds: [],
      })
    );
  };
};
