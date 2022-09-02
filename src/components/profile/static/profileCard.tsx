import { Text, Button, Avatar, Paper } from '@mantine/core';

interface UserInfoActionProps {
  icono: string;
  nombre: string;
  email: string;
  trabajo: string;
}

export function UserInfoAction({ icono, nombre, email, trabajo }: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={icono} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {nombre}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {trabajo}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  );
}