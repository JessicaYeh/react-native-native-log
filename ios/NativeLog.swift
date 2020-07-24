@objc(NativeLog)
class NativeLog: NSObject {

    @objc(log:)
    func log(message: String) -> Void {
        NSLog("%@", message)
    }

    @objc(logWithTag:message:)
    func logWithTag(tag: String, message: String) -> Void {
        NSLog("[%@] %@", tag, message)
    }
}
