import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo25Component } from './lib82-demo25.component';

describe('Lib82Demo25Component', () => {
  let component: Lib82Demo25Component;
  let fixture: ComponentFixture<Lib82Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
