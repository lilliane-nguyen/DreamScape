.container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    background: linear-gradient(135deg, rgba(255, 179, 193, 0.1) 0%, rgba(255, 214, 224, 0.1) 100%);
    min-height: 100vh;
}

.title {
    font-family: 'Playfair Display', serif;
    color: #333333;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.form {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(255, 179, 193, 0.2);
    backdrop-filter: blur(10px);
}

.input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid rgba(255, 179, 193, 0.3);
    border-radius: 30px;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
}

.input:focus {
    outline: none;
    border-color: #ff8da1;
    box-shadow: 0 0 0 2px rgba(255, 179, 193, 0.1);
}

.addButton {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(45deg, #ffb3c1, #ffd6e0);
    color: #532e3b;
    border: none;
    border-radius: 30px;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 179, 193, 0.3);
}

.addButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 179, 193, 0.4);
    background: linear-gradient(45deg, #ffd6e0, #ffb3c1);
}

.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (max-width: 768px) {
    .form {
        flex-direction: column;
    }

    .title {
        font-size: 1.5rem;
    }

    .addButton {
        width: 100%;
    }
}

.goalListContainer {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(255, 179, 193, 0.1) 0%, rgba(255, 214, 224, 0.1) 100%);
    min-height: 100vh;
    backdrop-filter: blur(10px);
}

.goalListTitle {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    background: linear-gradient(45deg, #532e3b, #6B85A1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(83, 46, 59, 0.2);
}

.goalsList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    position: relative;
    min-height: 50px;
}

.inputArea {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(83, 46, 59, 0.1);
    margin-bottom: 2rem;
    width: 100%;
}

.input {
    flex: 1;
    padding: 1rem;
    border: 2px solid #ff8da1;
    border-radius: 25px;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
    width: 100%;
}

.input:focus {
    outline: none;
    border-color: #ff8da1;
    box-shadow: 0 0 0 3px rgba(255, 141, 161, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%);
}

.addButton, .cancelButton {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.addButton {
    background: linear-gradient(45deg, #ffb3c1, #ffd6e0);
    color: #532e3b;
    box-shadow: 0 4px 15px rgba(255, 179, 193, 0.3);
}

.addButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 179, 193, 0.4);
    background: linear-gradient(45deg, #ffd6e0, #ffb3c1);
}

.cancelButton {
    background: #fff;
    color: #532e3b;
    border: 2px solid #ff8da1;
}

.cancelButton:hover {
    background: #fff5f7;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 179, 193, 0.2);
}

@media (max-width: 768px) {
    .inputArea {
        flex-direction: column;
        padding: 1rem;
    }

    .input {
        width: 100%;
    }

    .addButton, .cancelButton {
        width: 100%;
    }
}

.goalItem {
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 25px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 20px rgba(255, 179, 193, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goalItem:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(255, 179, 193, 0.2);
}

.goalItem.dragging {
    box-shadow: 0 8px 25px rgba(255, 179, 193, 0.3);
    transform: scale(1.02);
}

.goalItem::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #ffb3c1, #ffd6e0);
    border-radius: 25px 25px 0 0;
}

.goalTitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #532e3b;
    margin-bottom: 1rem;
}

.goalDescription {
    font-family: var(--font-body);
    font-size: 1.1rem;
    color: #532e3b;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.goalDeadline {
    font-family: var(--font-input);
    font-size: 1rem;
    color: #532e3b;
    margin-bottom: 1rem;
    opacity: 0.8;
}

.deleteButton {
    background: linear-gradient(45deg, #ffb3c1, #ffd6e0);
    color: #532e3b;
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 179, 193, 0.3);
}

.deleteButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 179, 193, 0.4);
    background: linear-gradient(45deg, #ffd6e0, #ffb3c1);
}

.stepsContainer {
    margin-top: 1.5rem;
    padding: 1rem;
    background: rgba(255, 179, 193, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(255, 179, 193, 0.3);
}

.stepInput {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    padding: 0.8rem;
    border: 2px solid rgba(255, 179, 193, 0.3);
    border-radius: 30px;
    width: 100%;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.9);
}

.stepList {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stepItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: #532e3b;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    position: relative;
    padding-left: 3rem;
    border: 1px solid rgba(255, 179, 193, 0.3);
}

.stepItem::before {
    content: '';
    position: absolute;
    left: 0.8rem;
    width: 20px;
    height: 20px;
    background: #ff8da1;
    border-radius: 50%;
    box-shadow: 
        -15px -5px 0 -8px #ffb3c1,
        15px -5px 0 -8px #ffb3c1,
        0 15px 0 -8px #ffb3c1;
    transition: all 0.3s ease;
}

.stepItem:hover::before {
    transform: rotate(45deg);
}

.checkbox {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    position: relative;
    z-index: 1;
}

.dragHandle {
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: grab;
    color: #ff8da1;
    font-size: 1.2rem;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dragHandle:hover {
    opacity: 1;
}

.priorityIndicator {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: linear-gradient(45deg, #ffb3c1, #ffd6e0);
    color: #532e3b;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(255, 179, 193, 0.2);
}

.emptyState {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(255, 179, 193, 0.1) 0%, rgba(255, 214, 224, 0.1) 100%);
    color: #532e3b;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    opacity: 0.8;
    border-radius: 15px;
    margin: 1rem 0;
}

.goalListWrapper {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
}

.goalCardsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
    padding-right: 1rem;
}

.goalCard {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
    border-radius: 15px;
    padding: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(83, 46, 59, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid transparent;
    width: 100%;
}

.goalCard:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 179, 193, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%);
}

.goalCard.selected {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ffb3c1, #ffd6e0) border-box;
}

.goalCard.dragging {
    box-shadow: 0 8px 25px rgba(255, 179, 193, 0.3);
    transform: scale(1.02);
}

.goalCardContent {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.priorityNumber {
    background: linear-gradient(45deg, #ffb3c1, #ffd6e0);
    color: #532e3b;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9rem;
}

.goalCardTitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #532e3b;
    margin: 0;
}

.goalCardProgress {
    background: linear-gradient(135deg, rgba(255, 179, 193, 0.2) 0%, rgba(255, 214, 224, 0.2) 100%);
    color: #532e3b;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 600;
}

.goalDetailsContainer {
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(83, 46, 59, 0.1);
    min-height: 400px;
}

@media (max-width: 768px) {
    .goalListWrapper {
        flex-direction: column;
    }

    .goalCardsContainer {
        flex: none;
        max-height: 300px;
    }

    .goalDetailsContainer {
        min-height: auto;
    }

    .inputArea {
        flex-direction: column;
        padding: 1rem;
    }

    .input {
        width: 100%;
    }

    .addButton {
        width: 100%;
    }
}
