import { useState, useEffect } from 'react';

import { withFormik } from 'formik';
import { fetchData, postData } from '../../../api/helper';

const EditPostForm = (props) => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`/api/posts/${props.id}`);

      setPostData(data);
    };

    getData();
  }, []);

  const {
    // passed down from higher order component
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    handleReset,
    dirty
  } = props;

  console.log('Edit Form Props:', props);
  console.log('Post Data:', postData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="row input-label-group">
          <label
            htmlFor="title"
            className="col-12 col-md-2 d-flex align-items-center"
          >
            故事名稱
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="col-md-8"
            placeholder="請輸入"
            onChange={handleChange}
            value={values.title.length > 0 ? values.title : postData.title}
          />

          {/* validation */}
          {errors.title && touched.title && (
            <div className="form-validation col-12 col-md-9 mt-4">
              {errors.title}
            </div>
          )}
        </div>
      </div>

      <div className="form-group">
        <div className="row input-label-group">
          <label
            htmlFor="post"
            className="col-12 col-md-2 d-flex align-items-center"
          >
            故事內容
          </label>
          <textarea
            id="post"
            name="post"
            type="text"
            className="col-md-8"
            placeholder="請輸入"
            rows="3"
            onChange={handleChange}
            value={values.post.length > 0 ? values.post : postData.content}
          />
          {/* validation */}
          {errors.post && touched.post && (
            <div className="form-validation col-12 col-md-9 mt-4">
              {errors.post}
            </div>
          )}
        </div>
      </div>
      <button type="submit" className="submit-btn ">
        Post Blog
      </button>
    </form>
  );
};

const EditPostFormValidated = withFormik({
  // Makes values props that holds the form state
  mapPropsToValues: (props) => ({
    title: '',
    post: ''
  }),

  // Custom validation
  validate: (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = '必填欄位';
    }

    if (!values.post) {
      errors.post = '必填欄位';
    }

    return errors;
  },

  // Submitting Form
  handleSubmit: async (values, { props, setSubmitting }) => {
    console.log('Post Values Before:', values);
    console.log('And props:', props);

    const { data } = await postData('/api/posts', {
      title: values.title,
      content: values.post
    });

    console.log('Data after posting:', data);
  },

  displayName: 'BasicForm'
})(EditPostForm);

export default EditPostFormValidated;