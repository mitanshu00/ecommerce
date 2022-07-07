import { WhishlistActions } from "../slice/whishlist-slice";

export const clearWishItems = () => (dispatch) => {
  dispatch(
    WhishlistActions.replaceWhishItems({
      wishItems: [],
      itemIds: []
    })
  );
};
