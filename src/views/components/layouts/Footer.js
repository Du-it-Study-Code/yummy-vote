import Container from '@/views/components/layouts/Container';

export default function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex h-14 items-center justify-center">
        <p className="text-muted-foreground text-sm">
          당신의 메뉴에게 투표하세요!
        </p>
      </Container>
    </footer>
  );
}