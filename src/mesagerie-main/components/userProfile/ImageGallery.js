import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import {useSelector} from "react-redux"

const MyGallery = () => {
  const infos=useSelector((state)=>state.infos)
  return (
    <Gallery>
      {infos.messages.length>0 ?infos.messages.map((image) => {
        console.log(image.imageUrl)
        if(image.imageUrl!=""){
          return <Item
        original={image.imageUrl}
        thumbnail={image.imageUrl}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={image.imageUrl}
          />
        )}
      </Item>

        }
        
        
      })
      :null}
      
      {/* <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item>
      <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item>
      <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item>
      <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item>
      <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item>
      <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://placekitten.com/80/60?image=2"
          />
        )}
      </Item> */}
    </Gallery>
  );
};
export default MyGallery;
