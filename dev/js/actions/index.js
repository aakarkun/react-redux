export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first_name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}