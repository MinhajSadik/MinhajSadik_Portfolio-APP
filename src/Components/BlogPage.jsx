import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import img from "../Assets/Images/blog.jpg";
import { Blogs } from "../Data/BlogData";
import Logo from "../SubComponents/Logo";
import PowerButton from "../SubComponents/PowerButton";
import SocialIcon from "../SubComponents/SocialIcon";
import BlogComponent from "./BlogComponent";

// styles
const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <Logo />
        <PowerButton />
        <SocialIcon />

        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
