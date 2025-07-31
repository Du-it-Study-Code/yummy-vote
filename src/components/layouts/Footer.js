import Container from '@/components/layouts/Container';

export default function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex h-14 items-center justify-center">
        <p className="text-muted-foreground text-sm">
          푸터엔 어떤 내용이 필요할까요?
        </p>
      </Container>
    </footer>
  );
}