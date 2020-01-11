import { withFormik } from 'formik';

const AddPostForm = (props) => {
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
            placeholder="請輸入"
            onChange={handleChange}
            value={values.title}
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
            placeholder="請輸入"
            onChange={handleChange}
            value={values.post}
          />
          {/* validation */}
          {errors.post && touched.post && (
            <div className="form-validation col-12 col-md-9 mt-4">
              {errors.post}
            </div>
          )}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Post Blog
      </button>
    </form>
  );
};

const AddPostFormValidated = withFormik({
  // Makes values props that holds the form state
  mapPropsToValues: () => ({
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
  },

  displayName: 'BasicForm'
})(AddPostForm);

export default AddPostFormValidated;
