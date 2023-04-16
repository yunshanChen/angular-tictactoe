import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapooComponent } from './capoo.component';

describe('CapooComponent', () => {
  let component: CapooComponent;
  let fixture: ComponentFixture<CapooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
