import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo26Component } from './lib82-demo26.component';

describe('Lib82Demo26Component', () => {
  let component: Lib82Demo26Component;
  let fixture: ComponentFixture<Lib82Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
