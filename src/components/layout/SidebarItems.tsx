import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";
interface SidebarItemsProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}
const SidebarItems: React.FC<SidebarItemsProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();
    if (auth && !currentUser) loginModal.onOpen();
    else if (href) router.push(href);
  }, [router, onClick, href, auth, currentUser, loginModal]);
  return (
    <div onClick={handleClick} className="flex items-center">
      <div
        className="
         relative
         rounded-full
         h-14
         w-14
         flex 
         items-center
         p-4
         hover:bg-slate-300
         hover:bg-opacity-10
         cursor-pointer
         lg:hidden
         text-white"
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
             relative
             hidden
             lg:flex
             items-row
             gap-4
             p-4
             hover:bg-slate-300
             hover:bg-opacity-10
             cursor-pointer
             items-center"
      >
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItems;
