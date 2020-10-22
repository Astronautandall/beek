// Third Party
import { parseISO } from "date-fns";
import { orderOptionsEnum } from "./constants";

const sortByTitle = (a, b) => {
    return a.title.localeCompare(b.title);
};

const sortByLastPlayedDate = (a, b) => {
    return parseISO(b.lastPlayedDate) - parseISO(a.lastPlayedDate);
};

const sortByPurchasedDate = (a, b) => {
    return parseISO(b.purchasedDate) - parseISO(a.purchasedDate);
};

export const getOrderFunc = (value) => {
    let orderFunc = null;

    switch (value) {
        case orderOptionsEnum.LAST_PLAYED_DATE:
            orderFunc = sortByLastPlayedDate;
            break;
        case orderOptionsEnum.PURCHASED_DATE:
            orderFunc = sortByPurchasedDate;
            break;
        default:
            orderFunc = sortByTitle;
            break;
    }
    return orderFunc;
};
