import {
    Box,
    Typography,
    TextField,
    Button,
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

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

export default function SignUpTextFields() {
    const navigate = useNavigate();

    const handleSignUp = (values, { setSubmitting }) => {
        console.log("Sign up data:", values);
        setSubmitting(false);
        navigate("/signin");
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                minHeight: "680px",
                bgcolor: "#FFFFFF",
            }}
        >
            {}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: "32px", sm: "60px", lg: "100px" },
                    py: "72px",
                }}
            >
                {}
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
                    Your Information
                </Typography>

                {}
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        color: "#9F9F9F",
                        mb: "48px",
                    }}
                >
                    You already have an account?{" "}
                    <Box
                        component="a"
                        href="/signin"
                        sx={{
                            fontWeight: 600,
                            color: "#2F302C",
                            textDecoration: "underline",
                            cursor: "pointer",
                            "&:hover": { color: "#B88E2F" },
                            transition: "color 0.2s",
                        }}
                    >
                        Sign in here
                    </Box>
                </Typography>

                {}
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSignUp}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                    columnGap: "32px",
                                    rowGap: "40px",
                                }}
                            >
                                {}
                                <Box>
                                    <Typography component="label" htmlFor="signup-name" sx={labelStyle}>
                                        Your name
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signup-name"
                                        name="name"
                                        variant="standard"
                                        placeholder="Enter your name"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                </Box>

                                {}
                                <Box>
                                    <Typography component="label" htmlFor="signup-email" sx={labelStyle}>
                                        E-mail
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signup-email"
                                        name="email"
                                        variant="standard"
                                        placeholder="Enter your email"
                                        type="email"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>

                                {}
                                <Box sx={{ gridColumn: { sm: "1 / -1" } }}>
                                    <Typography component="label" htmlFor="signup-phone" sx={labelStyle}>
                                        Phone number
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signup-phone"
                                        name="phone"
                                        variant="standard"
                                        placeholder="Enter your phone number"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.phone && Boolean(errors.phone)}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Box>

                                {}
                                <Box>
                                    <Typography component="label" htmlFor="signup-password" sx={labelStyle}>
                                        Password
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signup-password"
                                        name="password"
                                        variant="standard"
                                        placeholder="Enter password"
                                        type="password"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Box>

                                {}
                                <Box>
                                    <Typography component="label" htmlFor="signup-reset-password" sx={labelStyle}>
                                        Reset Password
                                    </Typography>
                                    <Field
                                        as={TextField}
                                        id="signup-reset-password"
                                        name="confirmPassword"
                                        variant="standard"
                                        placeholder="Confirm password"
                                        type="password"
                                        fullWidth
                                        sx={inputStyles}
                                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                    />
                                </Box>
                            </Box>

                            {}
                            <Box sx={{ mt: "56px" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    id="signup-submit-btn"
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
                                    {isSubmitting ? "Creating Account..." : "Create an account"}
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>

            {}
            <Box
                sx={{
                    bgcolor: "#F6F6F6",
                    display: "flex",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: { xs: "380px", md: "100%" },
                }}
            >
                {}
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
                    {}
                    <Box
                        sx={{
                            bgcolor: "#E97171",
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
                        HOT
                    </Box>

                    {}
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
                        Discount<br />
                        25% For<br />
                        New<br />
                        Member
                    </Typography>
                </Box>

                {}
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
                        alt="Promo Hanging Lamps"
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
}