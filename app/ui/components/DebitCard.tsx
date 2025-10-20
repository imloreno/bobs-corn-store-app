import { Customizable } from "@ui/types/text";

const DebitCard = ({ className, style }: Customizable) => {
  return (
    <div
      className={`bg-box rounded-xl border border-secondary-background p-3 mx-auto shadow-sm ${className}`}
      style={style}
    >
      <div className="flex items-center justify-between mb-3 gap-6">
        <div className="bg-background-secondary text-text px-3 py-1 rounded-sm font-bold text-sm">
          VISA
        </div>

        <div className="font-semibold tracking-wider mr-auto">•••• 6157</div>

        <div className="bg-success text-text px-5 py-1 rounded-sm font-bold text-sm">
          AUTHORIZED
        </div>
      </div>

      <div className="text-smooth text-sm space-y-1">
        <p>This card was authorized for any future bookings.</p>
        <p>You can decline or request a refund after 2 days</p>
      </div>
    </div>
  );
};

export default DebitCard;
