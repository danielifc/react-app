import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  size: string;
  onLike: () => void;
}

function Like({ size, onLike }: Props) {

  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onLike();
  }

  if(isLiked){
    return <AiFillHeart color="#ff6b81" size={size} onClick={() => toggle()}/>;
  } else{
    return <AiOutlineHeart size={size} onClick={toggle}/>;
  }

  
}

export default Like;
