import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../primary_button';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../atoms/auth_atom';
import { useNavigate } from 'react-router-dom';

function LoginIndicator() {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();

  if (auth === null)
    return (
      <div className="mt-3 flex flex-row content-center items-center justify-between rounded-lg p-3">
        <div className="max-w-md">
          <PrimaryButton title={'ورود'} onClick={() => navigate('/login')} />
        </div>
      </div>
    );
  return (
    <div className="mt-3 flex flex-row content-center items-center justify-between rounded-lg bg-white p-3">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon className="p-5" icon={faPersonWalking} />
        <span className="">سلام</span>
      </div>
      <div className="max-w-md">
        {' '}
        <PrimaryButton
          title={'خروج'}
          onClick={() => navigate('/login')}
          type={'danger'}
        />
      </div>
    </div>
  );
}

export default LoginIndicator;
