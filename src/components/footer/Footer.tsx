import { createStyles, Text, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  }
}));

export function FooterClaudio() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Text color="dimmed" size="sm" align='center'>
        © 2022 Claudio Chuhaicura. All Rights Reserved.
        </Text>
      </Container>
    </footer>
  );
}