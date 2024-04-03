import LeagueHeader from "../components/league/LeagueHeader.tsx";
import '../league.css';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import {LeagueSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {loadLeague} from "../store/league.ts";

const League = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    useEffect(() => {
        dispatch(loadLeague());
        user.websocket.emit('getLeague', {
            no: league.no > 0 ? league.no : 1,
            type: 'miner',
        })
    }, [0]);
    return (
        <div>
            <LeagueHeader />
        </div>
    );
};

export default League;
