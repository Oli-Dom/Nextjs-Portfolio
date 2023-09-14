/* eslint-disable react/jsx-no-comment-textnodes */

import { motion } from 'framer-motion';
import style from '../styles/Project.module.css';

const Project = () => {
  return (
    <div className={style.project}>
      <div className={style.project_container}>
        <p>//Top project</p>
        <div className={`${style.project_card_container}`}>
          <div className={`${style.project_card} ${style.card1}`}>
            <div>
              <div>
                <h4>Mine Sweeper</h4>
                <h3>Mine Sweeper Game created in Java</h3>
              </div>
              <button>
                <a href="https://github.com/Oli-Dom/Java_MineSweeper">
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className={`${style.project_card} ${style.card2}`}>
            <div>
              <div>
                <h4>Mock Dashboard</h4>
                <h3>
                  Mock Dashboard that displays information about games and their
                  funding status
                </h3>
              </div>
              <button>
                <a href="https://github.com/Oli-Dom/codePathPreWorkExcercise">
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className={`${style.project_card} ${style.card3}`}>
            <div>
              <div>
                <h4>Financial Advisor</h4>
                <h3>Financial advising AI</h3>
              </div>
              <button>
                <a href="https://github.com/Oli-Dom/Financial-Advisor">
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
