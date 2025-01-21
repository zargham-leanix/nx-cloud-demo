import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo11Component } from './lib82-demo11.component';

describe('Lib82Demo11Component', () => {
  let component: Lib82Demo11Component;
  let fixture: ComponentFixture<Lib82Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
