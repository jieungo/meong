import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import {
   LikeOutlined, MessageOutlined, EllipsisOutlined, LikeTwoTone,
} from '@ant-design/icons';
import moment from 'moment';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';
import Link from 'next/link';
import styled from 'styled-components';


const BorderedCard = styled(Card)`
    height: 100%;
    border-radius: 20px;
    box-shadow: grey 1px 1px 8px -7px;
    padding: 10px;
`;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me?.id);

  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);
  const onUnlike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const liked = post.Likers.find((v) => v.id === id);
  return (
    <div style={{width: '100%', marginTop: 30 }}>
      <BorderedCard
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked
            ? <LikeTwoTone twoToneColor="#857171" key="heart" onClick={onUnlike} />
            : <LikeOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
            <Popover
                key="more"
                content={(
                <Button.Group>
                    {id && post.User?.id === id
                    ? (
                        <>
                        <Button>수정</Button>
                        <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                        </>
                    )
                    : <Button>신고</Button>}
                </Button.Group>
                )}
            >
                <EllipsisOutlined />
            </Popover>

        ]}
        extra={id && <FollowButton post={post} />}
      >
          <Card.Meta
            avatar={<Avatar>{post.User?.nickname[0]}</Avatar>}
            title={post.User?.nickname}
            description={
              <>
              <span>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
            <PostCardContent postData={post.content} />
            </>
          }
            />
      </BorderedCard>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;