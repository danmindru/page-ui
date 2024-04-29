import { Button } from '@/components/shared/ui/button';
import { Textarea } from '@/components/shared/ui/textarea';

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
