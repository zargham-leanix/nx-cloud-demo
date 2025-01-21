import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo27Component } from './lib82-demo27.component';

describe('Lib82Demo27Component', () => {
  let component: Lib82Demo27Component;
  let fixture: ComponentFixture<Lib82Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
