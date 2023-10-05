import React from 'react';
import { Sheet, Typography } from '@mui/joy';

function About() {
  return (
    <Sheet
      sx={{
        p: 3,
      }}
    >
      <Typography>Hi, this is a website.</Typography>
      <Typography>
        I don&apos;t really need a website for much, but, who knows, maybe I
        will some day.
      </Typography>
      <Typography level="h2">Implementation</Typography>
      <Typography level="h3">Front End</Typography>
      <Typography>
        I initialized this website with create-react-app to initialize the
        website. To the extent this website is &quot;designed&quot;, I used Joy
        UI as a design system. I used React Router for routing and Anime.js for
        animations.
      </Typography>
      <Typography level="h3">Infrastructure</Typography>
      <Typography>
        The source code is hosted on GitHub, and the service is hosted on AWS.
        Deployments are handled by a GitHub CI/CD; each push to main builds a
        new docker image, uploads it to ECR, then triggers an ECS deploy.
      </Typography>
      <Typography>
        The website itself is hosted on Fargate spot-instances behind an ELB,
        and the domain is hosted on Route 53.
      </Typography>
    </Sheet>
  );
}

export default About;
