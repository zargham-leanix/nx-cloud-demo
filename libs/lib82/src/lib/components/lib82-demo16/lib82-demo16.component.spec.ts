import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo16Component } from './lib82-demo16.component';

describe('Lib82Demo16Component', () => {
  let component: Lib82Demo16Component;
  let fixture: ComponentFixture<Lib82Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
