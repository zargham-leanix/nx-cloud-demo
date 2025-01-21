import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo5Component } from './lib82-demo5.component';

describe('Lib82Demo5Component', () => {
  let component: Lib82Demo5Component;
  let fixture: ComponentFixture<Lib82Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
