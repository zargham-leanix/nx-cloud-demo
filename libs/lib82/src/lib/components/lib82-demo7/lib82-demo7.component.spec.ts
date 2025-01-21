import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo7Component } from './lib82-demo7.component';

describe('Lib82Demo7Component', () => {
  let component: Lib82Demo7Component;
  let fixture: ComponentFixture<Lib82Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
