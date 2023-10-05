import React from 'react';
import { Link, Sheet, Typography } from '@mui/joy';

function About() {
  return (
    <Sheet
      sx={{
        p: 3,
      }}
    >
      <Typography>
        Hi, this is a website. I don&apos;t really need a website for much, but,
        who knows, maybe I will some day. I gravitate more to backend
        programming than frontend, and I&apos;m certainly not a designer, so
        this is meant to serve mostly as a starting point/example of some good
        development practices and infrastructure for a new code base. See the
        source code{' '}
        <Link href="https://github.com/samleonard/ransom-deal">here</Link>.
      </Typography>
      <Typography level="h2" sx={{ mt: 2 }}>
        Implementation Details
      </Typography>
      <Typography level="h3" sx={{ mt: 1 }}>
        Front End
      </Typography>
      <Typography>
        I initialized this website with create-react-app to initialize the
        website. To the extent this website is &quot;designed&quot;, I used Joy
        UI as a design system. I used React Router for routing and Anime.js for
        animations.
      </Typography>
      <Typography level="h3" sx={{ mt: 1 }}>
        Infrastructure
      </Typography>
      <Typography>
        The source code is hosted on GitHub, and the service is hosted on AWS.
        Deployments are handled by a GitHub Actions; each push to main builds a
        new docker image, uploads it to ECR, then triggers an ECS deploy.
      </Typography>
      <Typography>
        Linting and testing are also run by GitHub Actions on all PRs.
      </Typography>
      <Typography sx={{ mt: 0.5 }}>
        Linting and testing are also run by GitHub Actions on all PRs.
      </Typography>
      <Typography sx={{ mt: 0.5 }}>
        The website itself is hosted on Fargate spot-instances behind an ELB,
        and the domain is hosted on Route 53.
      </Typography>
      <Typography level="h3" sx={{ mt: 1 }}>
        Potential Improvements
      </Typography>
      <Typography sx={{ mt: 1 }}>
        <ul style={{ marginTop: 0 }}>
          <li>Add a logging tool like Datadog</li>
          <li>
            Migrate away from create-react-app, since it seems as though it will
            not be maintained going forward. The React docs suggest Next.js.
          </li>
          <li>
            If this were a real project, use better git practices (commit
            comments, PRs for all changes, etc.).
          </li>
        </ul>
      </Typography>
    </Sheet>
  );
}

export default About;
