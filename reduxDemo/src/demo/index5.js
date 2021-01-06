import React, { PureComponent, Fragment } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export default class ParagraphExpand extends PureComponent {
    state = {
        fold: false,
        key: 0,
    };
    onExpand = () => {
        this.setState({ fold: true });
    };
    onCollapse = e => {
        e.preventDefault();
        this.setState(({ key }) => ({ fold: false, key: key + 1 }));
    };
    render() {
        const { rows = 1, content } = this.props;
        const { fold, key } = this.state;
        return (
            <Fragment>
                <div key={key}>
                    <Paragraph ellipsis={{ rows, expandable: true, onExpand: this.onExpand }}>
                        {content}
                    </Paragraph>
                </div>
                {fold && <a href=":;" onClick={this.onCollapse}>Collapse</a>}
            </Fragment>
        );
    }
}
