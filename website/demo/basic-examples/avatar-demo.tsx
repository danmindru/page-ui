import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shared/ui/avatar';

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://picsum.photos/800/400?random=6" alt="@avatar" />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  );
}
