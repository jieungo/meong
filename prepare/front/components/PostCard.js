import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Popover} from 'antd';
import {CommentOutlined, RetweetOutlined, HeartOutlined, EllipsisOutlined, StarTwoTone, HeartFilled} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';


const PostCard = ({post}) => {
    // const {user} = useSelector((state) => state.user);
    // const id = user?.id -> user && user.id; 옵셔널 체이닝 연산자
    const id = useSelector((state) => state.user.user?.id);
    // 위의 두 줄을 이렇게 합쳐도 가능

    const [liked, setLiked] = useState(false);
    const [commentOpend, setCommentOpend] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    },[]);
    const onToggleComment = useCallback(() => {
        setCommentOpend((prev) => !prev);
    })

    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <CommentOutlined key="comment" onClick={onToggleComment}/>,
                    <RetweetOutlined key="retweet" />,
                    liked
                    ? <HeartFilled key="heart" style={{color:'red'}}
                        onClick={onToggleLike}/>
                    : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                            <>
                                <Button>수정</Button>,
                                <Button>삭제</Button>,
                            </>
                            ) : <Button>신고</Button> }
                        </Button.Group>
                    )}>
                    <EllipsisOutlined />
                    </Popover>
                ]}    
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentOpend && (
                <div>
                    댓글부분
                </div> )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({ //shape를 통해 더 구체적으로 작성이 가능하다
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comment: PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;