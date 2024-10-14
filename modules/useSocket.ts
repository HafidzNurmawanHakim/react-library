import { useCallback } from "react";
import { Socket } from "socket.io-client";

interface UseSocket {
  socket: Socket | null;
  // options?: Partial<ManagerOptions & SocketOptions>;
}

function useSocket(props: UseSocket) {
  const { socket } = props;

  const subscribe = useCallback(
    (evt: string, callback: (...args: any[]) => void) => {
      if (!socket) return () => {};

      socket.on(evt, callback);

      return () => {
        socket.off(evt, callback);
      };
    },
    [socket],
  );

  const unSubscribe = useCallback(
    (evt: string, callback: (...args: any[]) => void) => {
      if (!socket) return () => {};
      socket.off(evt, callback);
    },
    [socket],
  );

  const emit = useCallback(
    (evt: string, ...args: any) => {
      if (!socket) return;
      socket.emit(evt, ...args);
    },

    [socket],
  );

  return { socket, subscribe, unSubscribe, emit };
}

export default useSocket;
