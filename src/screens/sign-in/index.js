import React, {useState} from 'react';
import {
  VStack,
  Image,
  Button,
  HStack,
  Divider,
  Text,
  ScrollView
} from 'native-base';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

// Reducer
import {Creators as signInActions} from 'store/reducers/sign-in';

// Components
import {InputText, ErrorText, AppButton} from 'components';

// Assets
import LoginBg from 'assets/images/login-bg.png';
import NearLabLogo from 'assets/images/near-lab-logo.png';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Email Phone Selection Buttons
const SelectionButton = ({children, onPress, isEmailSelected}) => (
  <Button
    mr='3'
    borderRadius={10}
    py={1}
    _text={{color: '#4F4F4F'}}
    bgColor={isEmailSelected ? '#F2F2F2' : '#0000'}
    onPress={onPress}
  >
    {children}
  </Button>
);

const SignInScreen = () => {
  // Dispatch
  const dispatch = useDispatch();

  // States
  const [isEmailSelected, setIsEmailSelected] = useState(true);

  // New User Validation Schema
  const newUserValidationSchema = yup.object().shape(
    isEmailSelected
      ? {
          email: yup
            .string()
            .email('Please enter valid email')
            .required('Email address is required')
        }
      : {
          phone: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Phone number is required')
        }
  );

  // Existing User Validation Schema
  const existingUserValidationSchema = yup.object().shape({
    username: yup.string().required('Username is required')
  });

  return (
    <VStack flex={1} bg='white'>
      <VStack bgColor='#FFCE20' h='40%'>
        <Image source={LoginBg} resizeMode='cover' h='100%' flex={1} />
        <Image
          source={NearLabLogo}
          resizeMode='contain'
          mb={2}
          height='24px'
          alignSelf='center'
        />
      </VStack>

      <ScrollView>
        <VStack px={5}>
          <HStack justifyContent='center' mt={4}>
            <SelectionButton
              onPress={() => setIsEmailSelected(true)}
              isEmailSelected={isEmailSelected}
            >
              Email
            </SelectionButton>
            <SelectionButton
              onPress={() => setIsEmailSelected(false)}
              isEmailSelected={!isEmailSelected}
            >
              Phone
            </SelectionButton>
          </HStack>

          {/* New User Form */}
          <Formik
            initialValues={isEmailSelected ? {email: ''} : {phone: ''}}
            validationSchema={newUserValidationSchema}
            onSubmit={values => alert(JSON.stringify(values))}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid
            }) => (
              <>
                <InputText
                  mt={4}
                  name={isEmailSelected ? 'email' : 'phone'}
                  placeholder={
                    isEmailSelected ? 'Email Address' : 'Ex. (373) 378 8383'
                  }
                  onChangeText={handleChange(
                    isEmailSelected ? 'email' : 'phone'
                  )}
                  onBlur={handleBlur(isEmailSelected ? 'email' : 'phone')}
                  value={isEmailSelected ? values.email : values.phone}
                  autoCapitalize='none'
                  keyboardType={isEmailSelected ? 'email-address' : 'phone-pad'}
                />
                {errors.email && touched.email && isEmailSelected && (
                  <ErrorText>{errors.email}</ErrorText>
                )}

                {errors.phone && touched.phone && !isEmailSelected && (
                  <ErrorText>{errors.phone}</ErrorText>
                )}
                <AppButton mt={4} isDisabled={!isValid} onPress={handleSubmit}>
                  {'Get Started >'}
                </AppButton>
              </>
            )}
          </Formik>
          {/* New User Form */}

          <Divider bgColor='#E9E6E6' my={6} />

          <Text textAlign='center'>Already have Near Account?</Text>

          {/* Existing User Form */}
          <Formik
            initialValues={{username: ''}}
            validationSchema={existingUserValidationSchema}
            onSubmit={values => {
              dispatch(
                signInActions.saveUserResponse({
                  user: values,
                  token: 'Dummy_Auth_Token'
                })
              );
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid
            }) => (
              <>
                <InputText
                  name='username'
                  placeholder='walletName.near'
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  autoCapitalize='none'
                />
                {errors.username && touched.username && (
                  <ErrorText>{errors.username}</ErrorText>
                )}

                <AppButton mt={4} isDisabled={!isValid} onPress={handleSubmit}>
                  {'Login >'}
                </AppButton>
              </>
            )}
          </Formik>
          {/* Existing User Form */}

          <Text textAlign='center' mt={4}>
            by clicking continue you must agree to near labs{' '}
            <Text color='blue.500'>Terms & Conditions</Text> and{' '}
            <Text color='blue.500'>Privacy Policy</Text>
          </Text>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default SignInScreen;
