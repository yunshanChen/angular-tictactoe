import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePieceComponent } from './choose-piece.component';

describe('ChoosePieceComponent', () => {
  let component: ChoosePieceComponent;
  let fixture: ComponentFixture<ChoosePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
