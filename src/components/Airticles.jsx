import { useState } from "react";
import {Title, Content, PublishButton} from './index'

const Airticles = (props) =>{

    const [isPublished, setIsPubliches] = useState(false)
    const publishAriticles = () =>{
        setIsPubliches(true);
    }
 
    return(
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishAriticles} />
        </div>
    );
}

export default Airticles;