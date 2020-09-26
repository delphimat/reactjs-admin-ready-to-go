import { UserActionTypes } from "./user.types";

export const tooggleConnectUser = () => {
        console.log("tooggleConnectUser");

        return ({ type: UserActionTypes.TOOGLE_CONNECT_USER })
};