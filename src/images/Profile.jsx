import style from "./profile.module.css";
import PIC from "./user.jpg";

const Profile = () => {
    return (
        <div>
            <section id={style.card}>
            <img src={PIC} alt="useerr"/>
            </section>
        </div>
    )
}
export default Profile;