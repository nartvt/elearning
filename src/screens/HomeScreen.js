import React, { useEffect } from 'react';
import CourseItem from '../components/CourseItem';
import { connect } from 'react-redux';
import { fetchCourseFromDB } from '../Store/actions/Courses';
import HookChildren from '../components/demoHooks/HookChildren';

// class HomeScreen extends Component {
//   render() {
//     return (
//       <>
//         <h1>Cybersoft Elearning</h1>
//         <div className='container'>
//           <div className='row'>
//             {/* <div className="col-3"> */}
//               {this._renderCourseItem(this.props.coursesw)}
//             {/* </div> */}
//           </div>
//         </div>
//       </>
//     );
//   }
//   componentDidMount() {
//     this.props.dispatch(fetchCourseFromDB())
//   }
//   _renderCourseItem = (data) => {
//     console.log(data)
//     return data.map((course, i) => {
//       return (
//         <div className='col-4' key={i}>
//           <CourseItem coursed={course} />
//         </div>
//       );
//     });
//   }
// }

// const mapStateToProps = state => {
//   return {
//     coursesw: state.coursesData.courseCollections

//   }
// }

// export default connect(mapStateToProps)(HomeScreen);

const HomeScreen = (props) => {
  // const [state1, setState1] = useState('a');
  // const [state2, setState2] = useState(false);
  //useEffect = didmount + didupdate
  // useEffect(() => {
  //   console.log("userEffect run 1!");
  // }, [state1, state2]);
  // useEffect(() => {
  //   console.log("userEffect run 2!");
  // }, []);// push empty array for first run
  useEffect(() => {
    // eslint-disable-next-line no-undef
    props.dispatch(fetchCourseFromDB());
  }, []); 
  const _renderCourseItem = (data = []) => {
    // console.log(data)
    return data.map((course, i) => {
      return (
        <div className='col-4' key={i}>
          {/* <HookChildren /> */}
          <CourseItem coursed={course} />
        </div>
      );
    });
  }
  return (
    <>
      <h1>Cybersoft Elearning</h1>
      <div className='container'>
        <div className='row'>
          {/* <div className="col-3"> */}
          {_renderCourseItem(props.coursesw)}
          {/* </div> */}
          {/* <button onClick={() => { setState1(state1 + 'a') }}>Change State</button> */}
        </div>
      </div>
    </>
  );
  // componentDidMount() {
  //   this.props.dispatch(fetchCourseFromDB());
  // }

}
const mapStateToProps = state => {
  return {
    coursesw: state.coursesData.courseCollections
  }
}
export default connect(mapStateToProps)(HomeScreen);