import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo9Component } from './lib82-demo9.component';

describe('Lib82Demo9Component', () => {
  let component: Lib82Demo9Component;
  let fixture: ComponentFixture<Lib82Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
