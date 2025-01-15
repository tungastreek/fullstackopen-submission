const Sum = ({ parts }) => {
    return (
        <p><strong>
            total of {parts.map(p => p.exercises).reduce((total, exercises) => total + exercises, 0)} exercises
        </strong></p>
    )
}

export default Sum