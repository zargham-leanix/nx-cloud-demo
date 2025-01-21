import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo47Component } from './lib82-demo47.component';

describe('Lib82Demo47Component', () => {
  let component: Lib82Demo47Component;
  let fixture: ComponentFixture<Lib82Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
