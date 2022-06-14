function IconSwitch(props) {
  return (
    <div class="switch-icon">
      <span className="material-icons md-48 md-dark icon" onClick={() => props.onSwitch()}>{props.icon}</span>
    </div>
  );
}

export default IconSwitch;
