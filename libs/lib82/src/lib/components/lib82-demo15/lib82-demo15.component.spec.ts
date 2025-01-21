import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo15Component } from './lib82-demo15.component';

describe('Lib82Demo15Component', () => {
  let component: Lib82Demo15Component;
  let fixture: ComponentFixture<Lib82Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
