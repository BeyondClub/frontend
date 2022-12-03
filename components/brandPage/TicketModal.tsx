import { Modal, BackgroundImage } from "@mantine/core";
import Image from 'next/image';
import qr from "../../public/assets/qr.png";

function Demo(props) {
        console.log(props);

  return (
      <Modal
        size={340}
        opened={props.handleTicketModal}
        onClose={() => props.setHandleTicketModal(false)}
        withCloseButton={false}
      >
        {/* Modal without header, presss escape or click on overlay to close */}
        <div>
          {/* w-80% bg-black" */}
          <div>
            <p className="text-black font-Helvetica text-xl font-bold  p-1">
              Your ticket for Christmas Special event
            </p>
          </div>
          <div>
            <h2 className="font-semibold font-serif m-1">
              Christmas Special Event
            </h2>
            <div className="flex justify-between">
              <div className="ticket-date">
                <p className="text-gray-500">Date</p>
                <p>Dec 24,2022 9pm-11pm</p>
              </div>
              <div className="ticket-loc">
                <p className="text-gray-500">Venue</p>
                <p>Central Park</p>
              </div>
            </div>
            <div className="ticket-qr">
              <Image
                className="z-50"
                src={qr}
                alt=""
                width={300}
                height={330}
              />
              <p className="text-gray-500 text-center">#150</p>
            </div>
          </div>
        </div>
      </Modal>
  );
}
export default Demo;