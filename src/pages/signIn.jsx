import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Link,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import lampImg from "../../assets/Lamp.png";

const labelStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    color: "#2F302C",
    mb: "8px",
    display: "block",
};

const inputStyles = {
    width: "100%",
    "& .MuiInput-underline:before": {
        borderBottomColor: "#D9D9D9",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#9F9F9F",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#2F302C",
    },
    "& .MuiInputBase-input": {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "14px",
        color: "#2F302C",
        padding: "8px 0px",
        "&::placeholder": {
            color: "#9F9F9F",
            opacity: 1,
        },
    },
};

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (values, { setSubmitting }) => {
        console.log("Sign in data:", values);
        setSubmitting(false);
        navigate("/homepage");
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                minHeight: "100vh",
                bgcolor: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: "32px", sm: "60px", lg: "100px" },
                    py: "72px",
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: 700,
                        color: "#2F302C",
                        mb: "8px",
                        textTransform: "uppercase",
                    }}
                >
                    Welcome Back
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        color: "#9F9F9F",
                        mb: "48px",
                    }}
                >
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        sx={{
                            fontWeight: 600,
                            color: "#2F302C",
                            textDecoration: "underline",
                            cursor: "pointer",
                            "&:hover": { color: "#B88E2F" },
                            transition: "color 0.2s",
                        }}
                    >
                        Sign up here
                    </Link>
                </Typography>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={handleSignIn}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "32px",
                                    maxWidth: "480px",
                                }}
                            >
                                <Box>
                                    <Typography component="label" htmlFor="signin-email" sx={labelStyle}>
                                        E-mail
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signin-email"
                                        name="email"
                                        type="email"
                                        variant="standard"
                                        placeholder="Enter your email"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>
                                <Box>
                                    <Typography component="label" htmlFor="signin-password" sx={labelStyle}>
                                        Password
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signin-password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        variant="standard"
                                        placeholder="Enter your password"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Box>
                                <Box sx={{ mt: "16px" }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isSubmitting}
                                        sx={{
                                            width: { xs: "100%", sm: "240px" },
                                            height: "56px",
                                            bgcolor: "#000000",
                                            color: "#FFFFFF",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            borderRadius: "5px",
                                            letterSpacing: "1px",
                                            boxShadow: "none",
                                            "&:hover": {
                                                bgcolor: "#2F302C",
                                                boxShadow: "none",
                                            },
                                        }}
                                    >
                                        {isSubmitting ? "Signing In..." : "Sign In"}
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Box
                sx={{
                    bgcolor: "#F6F6F6",
                    display: "flex",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: { xs: "380px", md: "100%" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        pl: { xs: "32px", md: "60px" },
                        pt: { xs: "48px", md: 0 },
                        zIndex: 2,
                        maxWidth: "65%",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#B88E2F",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            px: "16px",
                            py: "4px",
                            width: "fit-content",
                            borderRadius: "3px",
                            mb: "24px",
                            letterSpacing: "2px",
                        }}
                    >
                        WELCOME
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: "28px", md: "38px", lg: "44px" },
                            fontWeight: 700,
                            color: "#2F302C",
                            lineHeight: 1.15,
                            textTransform: "uppercase",
                        }}
                    >
                        Your Journey<br />
                        Starts<br />
                        Here
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "60%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}
                >
                    <Box
                        component="img"
                        src={lampImg}
                        alt="Welcome"
                        sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            objectPosition: "right top",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SignIn;