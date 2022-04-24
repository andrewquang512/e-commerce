import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
// import courses from '../../api/courses.json';
import { getCourse } from '../../store/actions/course';
import { addItem } from '../../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CourseDetail.module.scss';
import common from '../../styles/Common.module.scss';
import Spinner from '../Spinner/Spinner';

const CourseDetail = () => {
  const loading = useSelector((state) => state.course.loading);
  const course = useSelector((state) => state.course.course);

  let match = useMatch('/course/:id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse(match.params.id));
  }, []);

  //   console.log(course);
  return loading || course === null ? (
    <Spinner />
  ) : (
    <div className={styles['container']}>
      <div className={styles['background']}>
        <img src={require(`../../images/${course.image}`)} alt='banner' />
      </div>
      <div className={styles['banner-container']}>
        <div className={styles['banner']}>
          <div className={styles['title']}>
            <h2>Data structures and Algorithm - from zero to hero</h2>
            <span>
              Created by <span>Concept Courses</span>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, assumenda dolorem adipisci provident officiis
              molestias magni similique quos. Nam praesentium fuga alias tempore
              perspiciatis incidunt, tempora atque recusandae natus
              necessitatibus!
            </p>
          </div>
          <div className={styles['info']}>
            <p>Duration</p>
            <p>Num of task</p>
          </div>
          <div className={styles['payment']}>
            <p>20.000đ</p>
            <button
              className={styles['payment-btn']}
              onClick={(e) => {
                dispatch(addItem(course));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='content'></div>
    </div>
  );
};

export default CourseDetail;
