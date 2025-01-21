import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo3Component } from './lib82-demo3.component';

describe('Lib82Demo3Component', () => {
  let component: Lib82Demo3Component;
  let fixture: ComponentFixture<Lib82Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
