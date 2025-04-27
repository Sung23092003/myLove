import HomePage from "../pages/HomePage";
import Timeline from "../pages/Timeline";
import Album from "../pages/Album";
import QuizGame from "../pages/QuizGame";
import Letter from "../pages/Letter";
import LovePictionary from "../pages/LovePictionary";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: "/timeline",
        page: Timeline,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: "/album",
        page: Album,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: "/letter",
        page: Letter,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: "/quiz",
        page: QuizGame,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: "/quiz2",
        page: LovePictionary,
        isShowHeader: true,
        isShowFooter: true,
    },
];
