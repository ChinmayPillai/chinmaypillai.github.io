import { Typography, Grid } from "@mui/material"
import { headingStyle, titleStyle } from "../Utilities/colors"
export default function TechStack(){

    const imgBg = {
        backgroundColor: headingStyle,
        padding: 5
    }

    const imgSize = "60"

    const textColour = titleStyle

    return(
        <div>
            <Typography variant="h3" color={headingStyle} style={{textAlign:"left"}} sx={{textDecoration: 'underline', mb: 2}}>
                Tech Stack:
            </Typography >

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Programming Languages:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width={imgSize} height={imgSize}/> </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width={imgSize} height={imgSize}/> </a>
                    </p>
                
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Backend Development:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={imgSize} height={imgSize}/> </a>
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width={imgSize} height={imgSize}/> </a>
                        <a href="https://kafka.apache.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" alt="kafka" width={imgSize} height={imgSize}/> </a>
                    </p>
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Database:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width={imgSize} height={imgSize}/> </a>
                        <a href="https://redis.io" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width={imgSize} height={imgSize}/> </a>
                    </p>
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        OS:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width={imgSize} height={imgSize}/> </a>
                    </p>
                
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Frameworks:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width={imgSize} height={imgSize}/> </a>
                    </p>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        AI/ML:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width={imgSize} height={imgSize}/> </a>
                        <a href="https://pytorch.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width={imgSize} height={imgSize}/> </a>
                        <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width={imgSize} height={imgSize}/> </a>
                        <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width={imgSize} height={imgSize}/> </a>
                        <a href="https://opencv.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width={imgSize} height={imgSize}/> </a>
                        <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width={imgSize} height={imgSize}/> </a>
                    </p>
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Frontend Development:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={imgSize} height={imgSize}/> </a>
                        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width={imgSize} height={imgSize}/> </a>
                    </p>
                
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        DevOps:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width={imgSize} height={imgSize}/> </a>
                        <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width={imgSize} height={imgSize}/> </a>
                    </p>
                
                
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        CI/CD:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={imgSize} height={imgSize}/> </a>
                    </p>
                
                    <Typography variant="h4" color={textColour} style={{textAlign:"left"}}>
                        Other Software:
                    </Typography>
                    <p style={{textAlign:"left"}}>
                        <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width={imgSize} height={imgSize}/> </a>
                        <a href="https://postman.com" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width={imgSize} height={imgSize}/> </a>
                        <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width={imgSize} height={imgSize}/> </a>
                        <a href="https://ifttt.com/" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg" alt="ifttt" width={imgSize} height={imgSize}/> </a>
                        <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img style={imgBg} src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width={imgSize} height={imgSize}/> </a>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}