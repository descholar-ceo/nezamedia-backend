import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import ValidateSignup from '../../middlewares/signupValidate';
import ValidateUserVerification from '../../middlewares/verifyUserValidate';
import ValidateLogin from '../../middlewares/loginValidate';

const userRouter = Router();
const {
  saveNewUser, verifyUser, retrieveUser, resendVerificationEmail,
} = new UserController();
const { validateSignupData } = new ValidateSignup();
const { validateVerifyUser, validateResendVerificationEMail } = new ValidateUserVerification();
const { checkLoginCredentials } = new ValidateLogin();

userRouter.post('/signup', validateSignupData, saveNewUser);
userRouter.get('/verify-user', validateVerifyUser, verifyUser);
userRouter.get('/resend-verification-email', validateResendVerificationEMail, resendVerificationEmail);
userRouter.post('/login', checkLoginCredentials, retrieveUser);

export default userRouter;
