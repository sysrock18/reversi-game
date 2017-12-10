import { Component } from '@angular/core';
import { SwaggerApiService } from './services/swagger-api.service';
import { GameState } from './services/gameState';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ConfirmRestartComponent } from './confirm-restart/confirm-restart.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameState:GameState = new GameState();
  consts:any = {
    WHITE: "Blancas",
    BLACK: "Negras",
    IN_COURSE: "IN_COURSE",
    FINALIZED: "FINALIZED",
    WINNER: "Ganador!",
    DRAW: "Empate",
    PLAYER_WHITE: "WHITE",
    PLAYER_BLACK: "BLACK",
    FIELD_EMPTY: "_",
    FIELD_BLACK: "B",
    FIELD_WHITE: "W"
  };
  messages:any = {
    NOT_FOUND: "Error de conectividad",
    NOT_AUTHORIZED: "No autorizado",
    MOV_NOT_VALID: "Movimiento No Válido",
    FILL_POS: "Posición Ocupada",
    FINALIZED_GAME: "Juego finalizado",
    WAIT: "Espere..."
  };
  cssClasses:any = {
    FIELD_EMPTY_BLACK: "empty black-empty",
    FIELD_EMPTY_WHITE: "empty white-empty",
    FIELD_BLACK: "coin black",
    FIELD_WHITE: "coin white"
  };
  gameResult:any = {
    result:"",
    winner:""
  }
  loader:boolean = false;
  finalized:boolean = false;

  constructor(
    public api: SwaggerApiService,
    public snackBar: MdSnackBar,
    public dialog: MdDialog
  ) {
  }

  ngOnInit() {
    this.showGameState();
  }

  showGameState() {
    this.showLoader();
    this.api.getGameState().subscribe(
      data => {
        this.gameState = data;
        if(this.gameState.gameState == this.consts.FINALIZED) {
          this.getResult();
        }
      },
      err => {
        this.loader = false;
        this.getError(err);
      },
      () => {
        this.loader = false;
      }
    );
  }

  makeMovement(x:string, y:string) {
    if(!this.loader) {
      if(this.gameState.gameState == this.consts.IN_COURSE) {
        this.showLoader();
        this.api.performMovement(x, y).subscribe(
          data => {
            this.showGameState();
          },
          err => {
            this.loader = false;
            this.getError(err);
          }
        );
      } else {
        this.showMessage(this.messages.FINALIZED_GAME);
      }
    } else {
      this.showMessage(this.messages.WAIT);
    }
  }

  confirmRestart() {
    let dialogRef = this.dialog.open(ConfirmRestartComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.restartGame();
      }
    });
  }

  restartGame() {
    this.showLoader();
    this.api.restartGame().subscribe(
      data => {
        this.showGameState();
      },
      err => {
        this.loader = false;
        this.getError(err);
      }
    );
  }

  showAbout() {
    let dialogRef = this.dialog.open(AboutComponent);
  }

  getCSSClassesBoardCell(field:string) {
    if(field == this.consts.FIELD_EMPTY) {
      if(this.gameState.currentPlayer == this.consts.PLAYER_WHITE) {
        return this.cssClasses.FIELD_EMPTY_WHITE;
      } else {
        return this.cssClasses.FIELD_EMPTY_BLACK;
      }
    } else if(field == this.consts.FIELD_WHITE) {
      return this.cssClasses.FIELD_WHITE;
    } else if(field == this.consts.FIELD_BLACK) {
      return this.cssClasses.FIELD_BLACK;
    }
  }

  private showLoader() {
    if(!this.loader) {
      this.loader = true;
    }
  }

  private showMessage(message:string) {
    this.snackBar.open(message, null, {
      duration: 1500,
    });
  }

  private getResult() {
    if(this.gameState.blackCount > this.gameState.whiteCount) {
      this.gameResult.result = this.consts.WINNER;
      this.gameResult.winner = this.consts.BLACK;
    } else if(this.gameState.blackCount < this.gameState.whiteCount) {
      this.gameResult.result = this.consts.WINNER;
      this.gameResult.winner = this.consts.WHITE;
    } else {
      this.gameResult.result = this.consts.DRAW;
      this.gameResult.winner = false;
    }
  }

  private getError(err) {
    if (err.status == 0) {
      this.showMessage(this.messages.NOT_FOUND);
    } else if(err.status == 400) {
      this.showMessage(this.messages.MOV_NOT_VALID);
    } else if(err.status == 401) {
      this.showMessage(this.messages.NOT_AUTHORIZED);
    } else if(err.status == 409) {
      this.showMessage(this.messages.FILL_POS);
    }
  }

}
