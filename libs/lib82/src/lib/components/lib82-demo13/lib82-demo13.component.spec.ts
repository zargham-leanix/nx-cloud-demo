import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo13Component } from './lib82-demo13.component';

describe('Lib82Demo13Component', () => {
  let component: Lib82Demo13Component;
  let fixture: ComponentFixture<Lib82Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
