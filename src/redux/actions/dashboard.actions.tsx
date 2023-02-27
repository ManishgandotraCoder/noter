import * as dashboardApi from "../apis/dashboard.api"

export const getData = () => {
    // const response: any = dashboardApi.getData()
    //     .then()

    return {
        type: "GET_PRODUCTS",
        payload: {
            arr: [{
                name :"Emma Watson",
                images: [
                    "https://www.pinkvilla.com/imageresize/happy-birthday-emma-watson.jpg?width=752&t=pvorg"
                ]
            }]
        }
    }
    

}