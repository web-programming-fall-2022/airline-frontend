import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/auth_atom';
import Input from '../components/input';
import PrimaryButton from '../components/primary_button';

function LoginPage() {
  // create register useMutation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();

  const {
    mutate: logout,
    isLoading: logoutLoading,
    error: logoutError,
  } = useMutation(
    () => {
      return true;
      return axios.post('/api/v1/auth/logout', {
        auth_token: auth.auth_token,
        refresh_token: auth.refresh_token,
      });
    },
    {
      onSuccess: data => {
        // handle success
        console.log(data);
        localStorage.removeItem('auth');
        setAuth(null);
      },
    }
  );

  const {
    mutate: login,
    isLoading: loginLoading,
    error: loginError,
  } = useMutation(
    () => {
      // call register api
      return axios.post('/api/v1/auth/login', {
        email: email,
        password: password,
      });
    },
    {
      onSuccess: data => {
        // handle success
        console.log(data);
        if (data === undefined) return;
        localStorage.setItem('auth', JSON.stringify(data));
        setAuth(data);
        navigate('/');
      },
      onError: error => {
        // handle error
      },
    }
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <section className="m-10 max-w-2xl rounded-lg border p-5">
        <div className="flex flex-col items-end">
          <img
            src="https://avatars.githubusercontent.com/u/118119270?s=200&v=4"
            className="h-16 w-16"
          />
        </div>
        <h2 className="my-5 text-xl font-black">ورود به دنیای حبیب</h2>
        <p className="mb-4">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت
          بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در
          صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای
          نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات
          را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
        {auth && (
          <div className="w-full">
            <p className="mb-5 text-red-800">
              برای ورود با اکانتی دیگر ابتدا خارج شوید
            </p>
            <PrimaryButton title={'خروج'} type={'danger'} onClick={logout} />
          </div>
        )}

        {!auth && (
          <div className="w-full">
            <Input
              label={'ایمیل'}
              type={'email'}
              placeholder={'john@gmail.com'}
              required={true}
              setValue={setEmail}
              value={email}
            />

            <Input
              label={'رمز عبور'}
              type={'password'}
              placeholder={'********'}
              required={true}
              value={password}
              setValue={setPassword}
            />

            <div className="mt-5">
              <PrimaryButton title={'ورود'} onClick={login} />
            </div>
            <div className="mt-3">
              <PrimaryButton
                title={'ادامه بدون ثبت نام'}
                type={'secondary'}
                onClick={() => navigate('/')}
              />
            </div>
            <div className="mt-3">
              <PrimaryButton
                title={'ثبت نام'}
                type={'secondary'}
                onClick={() => navigate('/register')}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default LoginPage;
