import React, { useEffect, useMemo, useState } from "react";
import { singleCata, useAppSelector } from "@/store";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { shuffle } from "lodash";
import { marked } from "marked";

export const SelfTorture = () => {
  const routes = useAppSelector((state) => state.routes);
  const allKeywords = useMemo(() => {
    const questions: { name: any; answer: string[] }[] = [];
    const keysArr: string[] = [];
    const rec = (routes: Array<singleCata | string>, name: any[]) => {
      if (routes.length > 0) {
        routes.forEach((key) => {
          if (typeof key === "string") {
            keysArr.push(key);
          } else {
            // handle questions
            if (name.length) {
              name.push(name[name.length - 1] + "-" + key.label);
            } else {
              name.push(key.label);
            }
            questions.push({
              name: name[name.length - 1].split("-").join("-"),
              answer: key.keyWords.map((key) => {
                if (typeof key === "string") {
                  return key;
                } else {
                  return key.label;
                }
              }),
            });
            // handle keysArr
            keysArr.push(key.label);
            rec(key.keyWords, name);
          }
        });
      }
      if (name.length) {
        name.pop();
      }
    };
    rec(routes, []);
    return {
      questions,
      keysArr,
    };
  }, [routes]);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * allKeywords.questions.length)
  );
  const [option, setOption] = useState<string[]>([]);
  const [nowQuestion, setNowQuestion] = useState<any>({});
  const [myAnswer, setMyAnswer] = useState<Set<string>>(new Set());
  useEffect(() => {
    const ques = allKeywords.questions[randomNum];
    let opts = [...ques.answer];
    setNowQuestion(ques);
    while (opts.length < ques.answer.length + 3) {
      const ranIndex = Math.floor(Math.random() * allKeywords.keysArr.length);
      opts.push(allKeywords.keysArr[ranIndex]);
      opts = [...new Set(opts)];
    }
    opts = shuffle(opts);
    setOption(opts);
  }, [allKeywords.keysArr, allKeywords.questions, randomNum]);
  useEffect(() => {
    setMyAnswer(new Set());
  }, [nowQuestion]);

  const handleAnswerClick = (key: string) => {
    const newAnswer = new Set(myAnswer);
    if (newAnswer.delete(key)) {
      setMyAnswer(newAnswer);
    } else {
      newAnswer.add(key);
      setMyAnswer(newAnswer);
    }
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={10}>
        <Grid item xs={12} justifyContent="center">
          <Typography align="center">{nowQuestion.name}</Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <Grid container justifyContent="center" spacing={1}>
            {option.map((key: string) => {
              return (
                <Grid item key={key}>
                  <Chip
                    label={key}
                    color={myAnswer.has(key) ? "primary" : "default"}
                    onClick={() => handleAnswerClick(key)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={10}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMyAnswer(new Set(nowQuestion.answer));
                }}
              >
                正确答案
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setRandomNum(
                    Math.floor(Math.random() * allKeywords.questions.length)
                  );
                }}
              >
                下一题
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
