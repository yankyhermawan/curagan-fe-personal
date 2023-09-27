import { useRouter } from 'next/router';
import Button from '../Button';
import { FileEdit } from 'lucide-react';

interface UserProfileProps {
  name: string;
  email: string;
  imageURL: string;
}

const UserProfile = ({ name, email, imageURL }: UserProfileProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <div className="text-center my-4">
        <img
          className="inline-block h-28 w-28 rounded-full ring-1 ring-neutral-500"
          src={imageURL}
          alt="Profile picture"
        />
      </div>

      <div className="border-b-2 border-neutral-200">
        <div className="mb-2">
          <div>E-Mail:</div>
          <div className="font-bold">{email}</div>
        </div>

        <div className="mb-2">
          <div>Nama:</div>
          <div className="flex gap-2">
            <div className="font-bold">{name}</div>
            <FileEdit
              onClick={() => {
                router.push('/akun/edit');
              }}
              className="cursor-pointer hover:bg-slate-200"
            />
          </div>
        </div>
      </div>

      <div>
        <button className="w-32 h-8 bg-blue-500 hover:bg-blue-700 rounded-[3px] text-white mr-2">
          Ubah Password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
