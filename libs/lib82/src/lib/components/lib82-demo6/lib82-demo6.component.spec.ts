import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo6Component } from './lib82-demo6.component';

describe('Lib82Demo6Component', () => {
  let component: Lib82Demo6Component;
  let fixture: ComponentFixture<Lib82Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
