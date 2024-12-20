import { BiSearch } from "react-icons/bi";
import TextInput from "../../components/form/TextInput";
import { useMutation } from "@tanstack/react-query";
import { getLocationByPin } from "../../lib/api/location.api";
import { useEffect, useState } from "react";
import { useLocationStore } from "../../stores/useLocationStore";

const PinForm = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const setLocation = useLocationStore((state) => state.setLocation);
  const location = useLocationStore((state) => state.location);

  const searchPinMutation = useMutation({
    mutationFn: getLocationByPin,
  });

  const onSubmit = () => {
    setError("");
    if (pin.trim().length <= 0) return setError("Type Pincode.");
    searchPinMutation.mutate(pin.trim(), {
      onSuccess: (data) => {
        setLocation({
          district: data.District,
          state: data.State,
          pincode: data.Pincode,
        });
      },
      onError: () => {
        setError("Pincode invalid. Try again.");
      },
    });
  };

  useEffect(() => {
    if (location) {
      setPin(location.pincode);
    }
  }, [location]);
  return (
    <div>
      <div className="mt-2 flex w-full items-center gap-1">
        <TextInput
          containerClassName="flex-1 w-0"
          labelClassName="font-semibold"
          label="Search Pincode"
          placeholder="000000"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          error={error}
          inputClassName="join-item"
          maxLength={6}
          RightComponent={
            <button
              className="btn btn-square btn-primary join-item"
              onClick={onSubmit}
            >
              <BiSearch className="text-lg" />
            </button>
          }
        />
      </div>

      {searchPinMutation.isPending && (
        <div className="my-3 flex w-full items-center justify-center">
          <span className="loading loading-spinner" />
        </div>
      )}

      {location && !searchPinMutation.isPending && (
        <div className="my-3 flex w-full flex-col">
          <span className="font-semibold">Deliver at</span>
          <span>
            {location.district}, {location.state} - {location.pincode}
          </span>
        </div>
      )}
    </div>
  );
};

export default PinForm;
