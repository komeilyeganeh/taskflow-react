export type ModalType = {
    title: string;
    children: React.ReactNode;
    size: "sm" | "md" | "lg" | "xl";
    open: boolean;
    onClose: () => void;
}

