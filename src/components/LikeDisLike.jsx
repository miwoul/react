import { useState } from "react";
import CountLikes from "./CountLikes";

function LikeDisLike() {
    const [like, setlike] = useState(0);
    const [disLike, setdisLike] = useState(0);
    return(
        <div>
            <button onClick={() => setlike(like + 1)}>
                좋아요
            </button>
            <span>{like}</span>
            <button onClick={() => setdisLike(disLike + 1)}>
                싫어요
            </button>
            <span>{disLike}</span>
            <CountLikes />
        </div>
    )
}

export default LikeDisLike;