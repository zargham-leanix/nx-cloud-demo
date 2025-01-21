import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo2Component } from './lib82-demo2.component';

describe('Lib82Demo2Component', () => {
  let component: Lib82Demo2Component;
  let fixture: ComponentFixture<Lib82Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
