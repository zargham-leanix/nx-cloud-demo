import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo1Component } from './lib82-demo1.component';

describe('Lib82Demo1Component', () => {
  let component: Lib82Demo1Component;
  let fixture: ComponentFixture<Lib82Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
