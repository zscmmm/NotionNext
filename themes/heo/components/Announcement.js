import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react';

const NotionPage = dynamic(() => import('@/components/NotionPage'))

// 这里的 Announcement2 就是原本的Announcement组件
// const Announcement2 = ({ post, className }) => {
//   if (post?.blockMap) {
//     return <div >
//             {post && (
//                 <div id="announcement-content">
//                     <NotionPage post={post} />
//                 </div>
//             )}
//         </div>
//   } else {
//     return <></>
//   }
// }

// 这里的 Announcement 是我们新增的组件

const Announcement = ({ post, className }) => {
  const [hover, setHover] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const announcementRef = useRef(null);
  const replacementTextRef = useRef(null);

  useEffect(() => {
    if (announcementRef.current && replacementTextRef.current) {
      const announcementHeight = announcementRef.current.offsetHeight;
      const replacementHeight = replacementTextRef.current.offsetHeight;
      setMaxHeight(Math.max(announcementHeight, replacementHeight));
    }
  }, [post]);

  if (post?.blockMap) {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={className}
        style={{ height: `${maxHeight}px`, overflow: 'hidden' }}
      >
        <div id="announcement-content" ref={announcementRef} style={{ display: hover ? 'none' : 'block'}}>
          <NotionPage post={post} />
        </div>
        <div ref={replacementTextRef} style={{ display: hover ? 'block' : 'none' }}>
          一年之计在于春，一日之计在于晨。
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default Announcement

// export { Announcement, Announcement2 }