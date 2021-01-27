import React from "react";
import { Form, Button, Radio, Select } from "antd";
import { useHistory } from "react-router-dom";
import "./QuestionnaireForm.scss";

const { Option } = Select;

const QuestionnaireForm = (props) => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const history = useHistory();
  const gotoPlan = () => {
    history.push("/client/questionnaire/plan");
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = async (value) => {
    const response = await props.select(value);
  };

  const data = [
    {
      question: "I plan to begin withdrawing money from my investments in",
      options: ["Less than 3 years", "3–5 years", "11 years or more"],
    },
    {
      question: "When I invest my money, I am",
      options: [
        "Most concerned about my investment losing value",
        "Equally concerned about my investment losing or gaining value",
        "Most concerned about my investment gaining value",
      ],
    },
    {
      question:
        "Imagine that in the past three months, the overall stock market lost 35% of its value. An individual stock investment you own also lost 35% of its value. What would you do",
      options: ["Sell all of my shares", "Sell some of my shares", "Buy more shares"],
    },
  ];

  return (
    <>
      <div className="register-form">
        <div>
          <Form className="inner-div" name="horizontal_login" layout="vertical" onFinish={onFinish}>
            <div className="select-type">
              <h4>Account Type</h4>
              <Select placeholder="Select Type" onChange={handleChange} allowClear>
                <Option value="IndividualAccount">Individual Account</Option>
                <Option value="CorporateAccount">Corporate Account</Option>
              </Select>
            </div>
            {data.map((question, index) => {
              return (
                <div className="ant-col-md-24" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                  <div className="link-box-root">
                    <h4 className="link-title">{`Q${index + 1}: ${question.question}:`}</h4>
                    <Radio.Group defaultValue={1}>
                      {question.options.map((op) => {
                        return (
                          <Radio style={radioStyle} value={op} className="select-options">
                            <p>{op}</p>
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                    {/* <Input type="radio" >
                      {question.options.map((op) => {
                        return (
                          <p style={radioStyle} value={op} className="select-options">
                            <a>{op}</a>
                          </p>
                        );
                      })}
                    </Input> */}
                  </div>
                </div>
              );
            })}
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ant-btn ant-btn-primary"
                  // disabled={
                  //   !form.isFieldsTouched(true) ||
                  //   form.getFieldsError().filter(({ errors }) => errors.length).length
                  // }
                  onClick={gotoPlan}>
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default QuestionnaireForm;
