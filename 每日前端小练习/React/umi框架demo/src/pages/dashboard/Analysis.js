import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Select, Space } from 'antd';
import moment from 'moment'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Option = Select.Option;
const TextArea = Input.TextArea;
export default class Analysis extends Component {
  state = {
    current: '',
    xmmc: '',
    username: null,
  };

  componentDidMount(){
    console.log(this.list);
  }

  onChange = val => {
    // 修改老师邮箱输入框
    this.setState({ username: val });
  };
  data = require('./basicInformation.json');
  render() {
    console.log(this.list);
    return (
      <div style={{ height: '600px', overflow: 'auto',backgroundColor:"#fff" }}>
        <br />
        <label style={{ fontSize: '16px', fontWeight: '900', color: '#2d4ce2' }}>项目信息</label>
        <br />
        <br />
        <Form>
          <Row>
            <Col offset={1} span={6}>
              <Form.Item label="项目名称:">
                <Input placeholder="默认值" value={this.data.xmmc} />
              </Form.Item>
            </Col>
            <Col offset={2} span={6}>
              <Form.Item label="学校名称:" required tooltip="问号内容">
                <Input placeholder="默认值" value={this.data.xxmc} />
              </Form.Item>
            </Col>
            <Col offset={2} span={6}>
              <Form.Item label="合同金额:" required tooltip="合同金额">
                <Input placeholder="12345" value={this.data.htje} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={6}>
              <Form.Item label="中标时间:" >
                <DatePicker
                  
                  style={{ width: '100%' }}
                  value={moment(this.data.zbsj, 'YYYY-MM-DD')}
                />
              </Form.Item>
            </Col>
            <Col offset={2} span={6}>
              <Form.Item label="实施开始时间:">
                {this.data.sskssj === '' ? (
                  <DatePicker  style={{ width: '100%' }} />
                ) : (
                  <DatePicker
                    style={{ width: '100%' }}
                    value={moment(this.data.sskssj, 'YYYY-MM-DD')}
                  />
                )}
              </Form.Item>
            </Col>
            <Col offset={2} span={6}>
              <Form.Item label="实施结束时间:">
                {this.data.ssjssj === '' ? (
                  <DatePicker  style={{ width: '100%' }} />
                ) : (
                  <DatePicker
                    
                    style={{ width: '100%' }}
                    value={moment(this.data.ssjssj, 'YYYY-MM-DD')}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <br />
          <br />
          <label
            style={{
              fontSize: '16px',
              fontWeight: '900',
              color: '#2d4ce2',
            }}
          >
            人员信息
          </label>{' '}
          <br />
          <br />
          <Form.List name="ryxx" ref={el=>this.list=el} initialValue={this.data.ryxx}>
            {(fieldSize, { add, remove }) => {
              console.log(fieldSize);
              return (
                <>
                  <Row>
                    <Col offset={1} span={5}>
                      人员
                    </Col>{' '}
                    <Col offset={1} span={5}>
                      姓名
                    </Col>
                    <Col offset={1} span={5}>
                      邮箱
                    </Col>
                    <Col offset={1} span={4}>
                      电话号码
                    </Col>
                  </Row>
                  {fieldSize.map(({ key, name, fieldKey, ...restField }) => (
                    // eslint-disable-next-line react/jsx-key
                    <Row>
                      <Col offset={1} span={5}>
                        <Form.Item {...restField} name={[name, 'ry']}>
                          <Select
                            // defaultValue="销售"
                            // eslint-disable-next-line react/jsx-handler-names
                            onChange={this.onChange}
                          >
                            <Option value="销售">销售</Option>
                            <Option value="老师">老师</Option>
                            <Option value="项目经理">项目经理</Option>
                            <Option value="实施">实施</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col offset={1} span={5}>
                        <Form.Item {...restField} name={[name, 'xm']}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col offset={1} span={5}>
                        <Form.Item {...restField} name={[name, 'yx']}>
                          {this.data.ryxx[key]?.ry === '老师' ? (
                            <Input />
                          ) : (
                            <Input placeholder="请输入" addonAfter="@ly-sky.com" />
                          )}
                        </Form.Item>
                      </Col>
                      <Col offset={1} span={4}>
                        <Form.Item {...restField} name={[name, 'dhhm']}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col style={{ marginLeft: '2%' }}>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Col>
                    </Row>
                  ))}
                  <Row>
                    <Col offset={1} span={22}>
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block >
                          增加
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </>
              );
            }}
          </Form.List>
          <br />
          <br />
          <div>
            <br />
            <br />
            <label style={{ fontSize: '16px', fontWeight: '900', color: '#2d4ce2' }}>
              远程信息
            </label>
            <br />
            <br />
          </div>
          <Form.List name="users" initialValue={this.data.ycxx}>
            {(fieldSize, { add, remove }) => (
              <>
                <Row>
                  <Col offset={1} span={5}>
                    账号
                  </Col>{' '}
                  <Col offset={1} span={5}>
                    密码
                  </Col>
                </Row>
                {fieldSize.map(({ key, name, fieldKey, ...restField }) => (
                  // eslint-disable-next-line react/jsx-key
                  <Row>
                    <Col offset={1} span={5}>
                    
                        <Input.Group style={{ display: 'flex',alignItems:"flex-start" }}>
                        
                          <Select defaultValue="VPN">
                            <Option value="VPN">VPN</Option>
                            <Option value="向日葵">向日葵</Option>
                            <Option value="堡垒机">堡垒机</Option>
                          </Select>
                          <Form.Item {...restField} name={[name, 'zh']}>
                          <Input />
                          </Form.Item>
                        </Input.Group>
                 
                    </Col>
                    <Col offset={1} span={5}>
                      <Form.Item {...restField} name={[name, 'mm']}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col style={{ marginLeft: '2%' }}>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Col>
                  </Row>
                ))}
                <Row>
                  <Col offset={1} span={11}>
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block>
                        增加
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
          <Row>
            <Col offset={1} span={11}>
              <Form.Item label="备注">
                {' '}
                <TextArea showCount maxLength={200} />{' '}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col offset={1}>
                <Form.Item>
                  <Button type="primary">保存</Button>
                </Form.Item>
                <Form.Item>
                  <Button>取消</Button>
                </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
