import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo37Component } from './lib82-demo37.component';

describe('Lib82Demo37Component', () => {
  let component: Lib82Demo37Component;
  let fixture: ComponentFixture<Lib82Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
