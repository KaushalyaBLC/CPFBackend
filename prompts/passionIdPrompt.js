const passionIDPromt = (formData) =>{

    const questions = [
        "How confident do you feel in your mathematics and science abilities? (Rate from 1 to 5, where 1 is not confident and 5 is very confident)",
        "Describe some notable academic achievements you attained after the age of 15 years",
        "Have you ever engaged in coding or programming?",
        "If yes, what languages have you tried, and what did you create",
        "Rate your proficiency in using computers and software applications (such as word processors, spreadsheets, and presentation tools) from 1 to 5.",
        "How comfortable are you with writing essays or reports? (Rate from 1 to 5)",
        "What subjects are you most passionate about, and why?",
        "Describe a topic or concept you learned outside your school curriculum that fascinated you.",
        "Which sports have you participated in?",
        "What is the highest level of achievement have you attained in the sport(s) you participated in?",
        "Which extracurricular activities have you participated in, and mention any special positions or roles you hold in those activities?",
        "Have you taken any initiatives or led any projects? If so, please describe your role and the impact of your work.",
        "Name 3 careers are you considering pursuing? Why does this particular path interest you?",
        "Do you prefer to work individually or as part of a team? Explain why",
      ];

    let prompt = "";
    
    if (formData.educationLevel === "preol") {
        prompt = `this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        If you are not satisfy with the answers dont reply just say answers are not good enough
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality then please provide detailed information about 5 higher education paths the user could consider pursuing.each path should describe one by one
        answer should be like {higher education path,its job opportunities, its demand and softskills needed} only recommend a sport if they has national or international level achievement use natural language and describe as much as you can
        `;
      } else if (formData.educationLevel === "ol") {
        prompt = `i'm a ${formData.age}} old student who considering for higher education this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        and this is the GCE O/L exam result sheet
        ${formData.subject1}-${formData.result1},
        ${formData.subject2}-${formData.result2},
        ${formData.subject3}-${formData.result3},
        ${formData.subject4}-${formData.result4},
        ${formData.subject5}-${formData.result5},
        ${formData.subject6}-${formData.result6},
        ${formData.subject7}-${formData.result7},
        ${formData.subject8}-${formData.result8},
        ${formData.subject9}-${formData.result9},
        If you are not satisfy with the answers dont reply just say answers are not good enough
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using 3 paragraphs then please provide detailed information about '5 higher education paths' the user could consider pursuing.each path should describe one by one
        answer should be like {higher education path,its job opportunities, its demand and softskills needed} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can
        `;
      } else if (formData.educationLevel === "preal") {
        prompt = `i'm a srilankan student who following GCE A/L examination in ${formData.stream} and i learn ${formData.combination} this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[7]}-${formData.q8},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        If you are not satisfy with the answers dont reply just say answers are not good enough
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider pursuing.each path should describe one by one 
        answer should be like {career, career description(describe as long as possible), softskill needed, education path for that career} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
        `;
      } else if (formData.educationLevel === "al") {
        prompt = `i'm a srilankan student who completed GCE A/L examination in ${formData.stream} and this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[7]}-${formData.q8},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
    
        and this is my A/L examination results
        ${formData.subject1}-${formData.result1},
        ${formData.subject2}-${formData.result2},
        ${formData.subject3}-${formData.result3},
        If you are not satisfy with the answers dont reply just say answers are not good enough
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider pursuing.each path should describe one by one 
        answer should be like {career, career description(describe as long as possible), softskill needed, education path for that career} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
        `;
      } else if (formData.educationLevel === "degree") {
        prompt = `i'm a srilankan student who has a ${formData.degree} and this is questions and answer list
        ${questions[0]}-${formData.q1},
        ${questions[1]}-${formData.q2},
        ${questions[2]}-${formData.q3},
        ${questions[3]}-${formData.q4},
        ${questions[4]}-${formData.q5},
        ${questions[5]}-${formData.q6},
        ${questions[6]}-${formData.q7},
        ${questions[7]}-${formData.q8},
        ${questions[8]}-${formData.q9},
        ${questions[9]}-${formData.q10},
        ${questions[10]}-${formData.q11},
        ${questions[11]}-${formData.q12},
        ${questions[12]}-${formData.q13},
        ${questions[13]}-${formData.q14},
        
        If you are not satisfy with the answers dont reply just say answers are not good enough
        Based on the user's responses to the provided questions regarding their confidence in mathematics and science abilities, notable academic achievements, engagement in coding or programming, proficiency in using computers and software applications, comfort with writing essays or reports, passion for specific subjects, participation in sports or extracurricular activities, leadership experience, and career interests, please provide a detailed information about their character their passion,skills,and personality using well described 3 paragraphs, then please provide detailed information about '5 career paths' the user could consider.each path should describe one by one 
        answer should be like {career, career description(describe as long as possible), softskill needed, technical skills needed} only recommend a sport if they has national or international level achievement use natural language and describe each path as much as you can answers should based on the data provide.
        `;
      }
    return prompt;

}

module.exports=passionIDPromt;