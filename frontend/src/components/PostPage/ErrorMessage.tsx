interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-6" role="alert">
        <p>{message}</p>
    </div>
);

export default ErrorMessage;