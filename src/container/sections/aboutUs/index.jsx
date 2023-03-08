import {
  Badge,
  Button,
  Col,
  Drawer,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Tabs,
} from "antd";
import React, { useRef, useState } from "react";
import "./aboutus.css";
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  EditTwoTone,
  ContactsFilled,
  EnvironmentFilled,
  ShopFilled,
  NotificationFilled,
  MailFilled,
  PhoneFilled,
  DeleteTwoTone,
  PlusCircleOutlined,
  CloudFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import CustomCard from "../../utilities/card";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const descRef = useRef();
  const [form] = Form.useForm();
  let contactContent = [
    {
      name: "Sales Team",
      index: 0,
      mail: ["Sales@test.in", "abc@abc.in"],
      phone: [987654321, 123456789],
    },
    {
      name: "Office Team",
      index: 1,

      mail: ["Office@test.in", "abc@abc.in"],
      phone: [987654321, 123456789],
    },
    {
      name: "support Team",
      index: 2,

      mail: ["support@test.in", "abc@abc.in"],
      phone: [987654321, 123456789],
    },
  ];
  let defaultDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus repellendus, nulla, excepturi totam libero tempora, illum itaque esse tempore qui deleniti facilis ut delectus. Ab accusamus totam officiis odio!";
  const [isVerified, setIsVerified] = useState(false);
  const [description, setDescription] = useState(defaultDesc);
  const [open, setOpen] = useState(false);
  const [contactDetails, setContactDetails] = useState(contactContent);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [currentContact, setcurrentContact] = useState(contactDetails[0]);

  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = (index) => {
    setChildrenDrawer(true);
    setcurrentContact(
      contactDetails.filter((item) => item["index"] === index).at(0)
    );
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const tabsTitles = [
    "Info",
    "FAQ",
    "Complaints & Feedback",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const handleContactEdit = () => {
    setOpen(true);
  };

  const tabsData = {
    Contact: {
      content: contactDetails,
      function: () => handleContactEdit(),

      icon: <ContactsFilled style={{ marginRight: "10px" }} />,
    },
    Address: {
      content: "123, Mumbai, India",
      icon: <EnvironmentFilled style={{ marginRight: "10px" }} />,
    },
    "House of Operation": {
      content: "Mon to Fri : 9 am to 6 pm",
      icon: <ShopFilled style={{ marginRight: "10px" }} />,
    },
    "Social Media & Links": {
      content: "Mon to Fri : 9 am to 6 pm",
      icon: <ShopFilled style={{ marginRight: "10px" }} />,
    },
    Statement: {
      content: "You Think It, We Develop It",
      icon: <NotificationFilled style={{ marginRight: "10px" }} />,
    },
  };

  const onChange = (key) => {
    console.log(key);
  };
  const handleVerify = () => {
    setIsVerified((prev) => !prev);
  };
  const deleteElement = (index) => {
    contactDetails.length > 1
      ? setContactDetails((prev) =>
          prev.filter((item) => item["index"] !== index)
        )
      : message.info("Minimum one contact detail should be present.");
  };

  const handleDescriptionEdit = () => {
    Modal.confirm({
      title: "Change Description",
      content: <Input ref={descRef} />,
      onOk() {
        setDescription(descRef?.current?.input?.defaultValue);
      },
    });
  };

  const handleEmailAdd = (index, value) => {
    setContactDetails((prev) => {
      prev.forEach((item) => item["index"] === index && item.mail.push(value));
      return prev;
    });
    message.success("Email Added !");
  };

  const handleContactAdd = (index, value) => {
    setContactDetails((prev) => {
      prev.forEach((item) => item["index"] === index && item.phone.push(value));
      return prev;
    });
    message.success("Contact Number Added !");
  };

  const openLinkedIn = () => {
    const win = window.open(
      "https://www.linkedin.com/in/mahesh-ambrale-402bba18a/",
      "_blank"
    );
    win.focus();
  };

  const cards = (
    <Row gutter={16}>
      {Object.keys(tabsData).map((item, index) => {
        return (
          <Col span={8}>
            <CustomCard
              key={index}
              title={
                <span>
                  {tabsData[item]["icon"]}
                  {item}
                </span>
              }
              extra={
                <EditTwoTone
                  onClick={tabsData[item]["function"] || handleDescriptionEdit}
                  twoToneColor={"#aa2d2b"}
                />
              }
              description={
                item === "Social Media & Links" ? (
                  <Space direction="horizontal" align="center">
                    <Space
                      onClick={openLinkedIn}
                      direction="vertical"
                      align="center"
                      style={{ cursor: "pointer" }}
                    >
                      <LinkedinFilled
                        style={{ fontSize: "20px", color: "grey" }}
                      />
                      LinkedIn
                    </Space>
                    <Space direction="vertical" align="center">
                      <CloudFilled
                        style={{ fontSize: "20px", color: "grey" }}
                      />
                      Website
                    </Space>
                    <Space direction="vertical" align="center">
                      <FacebookFilled
                        style={{ fontSize: "20px", color: "grey" }}
                      />
                      Facebook
                    </Space>
                    <Space direction="vertical" align="center">
                      <InstagramFilled
                        style={{ fontSize: "20px", color: "grey" }}
                      />
                      Instagram
                    </Space>
                  </Space>
                ) : // typeof tabsData[item]["content"] === "object" ?
                Array.isArray(tabsData[item]["content"]) ? (
                  <div className="card-desc">
                    <div>
                      <span>
                        <MailFilled style={{ marginRight: "10px" }} />
                        {tabsData[item]["content"][0]["mail"]?.join(" / ")}
                      </span>
                      <br />
                      <span>
                        <PhoneFilled style={{ marginRight: "10px" }} />
                        {tabsData[item]["content"][0]["phone"]?.join(" / ")}
                      </span>
                    </div>
                    <div>
                      {contactDetails.length > 1 && (
                        <Badge
                          style={{ marginLeft: "20px" }}
                          count={`+${contactDetails?.length - 1}`}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  tabsData[item]["content"]
                )
              }
            />
          </Col>
        );
      })}
    </Row>
  );
  const items = tabsTitles.map((item, index) => {
    return { key: index, label: item, children: cards };
  });

  return (
    <div className="aboutus">
      <div className="aboutus--title">
        <h2>About Us</h2>
      </div>
      <div className="aboutus--company">
        <Space align="center">
          <div className="aboutus--logo">
            <img src="src/assets/react.svg" alt="aboutus-logo" />
          </div>
          <h2>Company</h2>
          {isVerified ? <CheckCircleTwoTone /> : <CheckCircleOutlined />}
          <Button type="link" onClick={handleVerify}>
            Verify Company
          </Button>
        </Space>
      </div>
      <Space style={{ width: "60%" }} align="center">
        <div className="aboutus--description">{description || defaultDesc}</div>

        <EditTwoTone onClick={handleDescriptionEdit} twoToneColor={"#aa2d2b"} />
      </Space>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      <Drawer title="Contacts" placement="right" onClose={onClose} open={open}>
        <div>Please Provide the company's email and contacts</div>
        {contactDetails?.map((item) => {
          return (
            <CustomCard
              key={item.index}
              title={
                <span>
                  {tabsData.Contact.icon}
                  {item?.name}
                </span>
              }
              extra={
                <div>
                  <EditTwoTone
                    style={{ marginRight: "10px" }}
                    onClick={() => showChildrenDrawer(item.index)}
                    //   onClick={tabsData[item]["function"] || handleDescriptionEdit}
                    twoToneColor={"#aa2d2b"}
                  />
                  <DeleteTwoTone
                    style={{ marginRight: "10px" }}
                    onClick={() => deleteElement(item.index)}
                    twoToneColor={"#aa2d2b"}
                  />
                </div>
              }
              description={
                // typeof tabsData[item]["content"] === "object" ? (
                <div>
                  <span>
                    <MailFilled style={{ marginRight: "10px" }} />
                    {item.mail?.join(" / ")}
                  </span>
                  <br />
                  <span>
                    <PhoneFilled style={{ marginRight: "10px" }} />
                    {item.phone?.join(" / ")}
                  </span>
                </div>
                // ) : (
                //   tabsData[item]["content"]
                // )
              }
            />
          );
        })}
        <Drawer
          title="Contact Edit"
          width={320}
          //   closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <Form
            //   {...formItemLayout}
            layout="vertical"
            form={form}
            initialValues={{
              email: currentContact.mail[0],
              contactNumber: currentContact.phone[0],
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item name={"email"} label="Email">
              <Input placeholder="Enter Email..." />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() =>
                  handleEmailAdd(
                    currentContact.index,
                    form.getFieldValue("email")
                  )
                }
              >
                Add More
              </Button>
            </Form.Item>
            <Form.Item name={"contactNumber"} label="Contact Number">
              <Input placeholder="Enter Contact Number..." />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={() =>
                  handleContactAdd(
                    currentContact.index,
                    form.getFieldValue("contactNumber")
                  )
                }
              >
                Add More
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Drawer>
    </div>
  );
};

export default AboutUs;
