import { Upload, message, Button, Icon } from 'antd';

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default () => {
    return (
        <Upload {...props}>
            <Button>
                <Icon type="upload" />
                Click to Upload
            </Button>
        </Upload>
    )
}

