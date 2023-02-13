import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/auth_atom";
import Input from "../components/input";
import PrimaryButton from "../components/primary_button";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("M");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useRecoilState(authAtom);

  const navigate = useNavigate();

  const {
    mutate: register,
    isLoading: registerLoading,
    error: registerError,
  } = useMutation(
    () => {
      // call register api
      console.log({
        email: email,
        phone_number: phoneNumber,
        gender: gender,
        first_name: firstName,
        last_name: lastName,
        password: password,
      });
      return axios.post("/api/v1/auth/register", {
        email: email,
        phone_number: phoneNumber,
        gender: gender,
        first_name: firstName,
        last_name: lastName,
        password: password,
      });
    },
    {
      onSuccess: (data) => {
        if (data === undefined) return;
        localStorage.setItem("auth", JSON.stringify(data.data));
        setAuth(data);
      },
      onError: (error) => {
        // handle error
      },
    }
  );

  useEffect(() => {
    if (auth !== null) {
      console.log("auth is not null", auth);
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="max-w-2xl border rounded-lg p-5 m-10">
        <div className="flex flex-col items-end">
          <img
            src="https://avatars.githubusercontent.com/u/118119270?s=200&v=4"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-xl font-black my-5">ورود به دنیای حبیب</h2>
        <p className="mb-4">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت
          بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در
          صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای
          نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات
          را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>

        {registerLoading && <p>در حال بارگذاری...</p>}

        <div className="w-full">
          <Input
            label={"ایمیل"}
            type={"email"}
            value={email}
            setValue={setEmail}
            placeholder={"john@gmail.com"}
            required={true}
          />
          <Input
            label={"شماره تماس"}
            type={"tel"}
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder={"09123456789"}
            required={true}
          />
          <Input
            label={"جنسیت"}
            type={"select"}
            value={gender}
            setValue={setGender}
            values={[
              { value: "M", name: "مرد" },
              { value: "F", name: "زن" },
            ]}
            required={true}
          />
          <Input
            label={"نام"}
            type={"text"}
            value={firstName}
            setValue={setFirstName}
            placeholder={"بنیامین"}
            required={true}
          />
          <Input
            label={"نام خانوادگی"}
            type={"text"}
            value={lastName}
            setValue={setLastName}
            placeholder={"بیضایی"}
            required={true}
          />
          <Input
            label={"رمز عبور"}
            type={"password"}
            value={password}
            setValue={setPassword}
            placeholder={"********"}
            required={true}
          />

          <div className="mt-5">
            <PrimaryButton
              title={"ثبت نام"}
              onClick={() => {
                register();
              }}
            />
          </div>
          <div className="mt-5">
            <PrimaryButton title={"ادامه بدون ثبت نام"} type={"secondary"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
