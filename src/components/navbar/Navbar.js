import Logo from './Logo';
import StudentNavbar from './StudentNavbar';
import TeacherNavbar from './TeacherNavbar';
import Login from './Login';
import Register from './Register';
function Navbar(props) {
    return (
        <>
            <div class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <!-- jee logo  --> */}
                    <a class="navbar-brand" href="#"> <Logo></Logo></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* role=student; */}
                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        if({props.role} == 'student'){
                            <StudentNavbar></StudentNavbar>
                        }else{
                            <TeacherNavbar></TeacherNavbar>
                        }
                    </div> */}
                    <StudentNavbar></StudentNavbar>
                    {/* <!-- profile dropdown  --> */}
                    {/* <div class="btn-group" role="group">
                        if({props.login} != "John"){
                            <Login name={props.name}></Login>
                        }else{
                            <Register></Register>}

                    </div> */}
                    <Login></Login>
                </div>
            </div>
        </>
    );
}

export default Navbar;