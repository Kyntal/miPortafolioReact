import { UserInfoAction } from "./static/profileCard";
import profileData from "./static/data/profileInfo.json";

export function MyProfile() {
    return UserInfoAction({...profileData});
}