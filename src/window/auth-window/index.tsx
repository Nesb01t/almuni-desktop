import React, { MouseEvent, ChangeEvent, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { LoginForm } from "@/window/auth-window/type";
import { useAuthStore } from "@/store/auth";
import { closeApplication } from "@/utils/window";

const login = async (data: LoginForm) => {
  try {
    const res = await axios.post<{ token: string }>("http://localhost:8080/auth/login", data);
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const AuthWindow: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({} as LoginForm);
  const authStore = useAuthStore();
  const onLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    login(form).then((res) => {
      if (res?.token) {
        authStore.setToken(res.token);
      }
    });
  };

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row-reverse">
          {/* 右侧提示 */}
          <div className="ml-12">
            <h1 className="text-3xl font-bold flex gap-1.5 items-center">登入<Icon
              icon="line-md:moon-rising-filled-alt-loop" /></h1>
            <p className="pt-6">你好啊，欢迎加入 Zust Cloud</p>
            <p className="pt-3">输入您的电子邮箱或学号</p>
          </div>

          {/* 左侧表单 */}
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">学号</span>
                </label>
                <input type="text" name="no" value={form?.no} onChange={onFormChange} minLength={10} maxLength={10}
                       placeholder="student number"
                       className="input input-sm input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">密码</span>
                </label>
                <input type="password" name="password" value={form?.password} onChange={onFormChange} minLength={6}
                       maxLength={20}
                       placeholder="password"
                       className="input input-sm input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt text-gray-600 link link-hover">忘记密码?</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button onClick={onLogin} className="btn glass bg-primary/80 btn-primary">加入 ZUST CLOUD
                </button>
              </div>
            </form>
          </div>

          <a className="btn btn-ghost text-base-content absolute top-4 right-4" onClick={() => closeApplication()}>
            <Icon fontSize={25}
                  icon="material-symbols:exit-to-app" />
          </a>
        </div>
      </div>
    </>
  );
};