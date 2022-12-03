import { Modal } from '@mantine/core';

function Demo(props) {
	return (
		<Modal
			opened={props.handleTicketModal}
			onClose={() => props.setHandleTicketModal(false)}
			withCloseButton={false}
		>
			Modal without header, press escape or click on overlay to close
		</Modal>
	);
}
export default Demo;
