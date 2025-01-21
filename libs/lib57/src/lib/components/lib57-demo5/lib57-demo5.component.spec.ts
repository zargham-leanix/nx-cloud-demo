import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo5Component } from './lib57-demo5.component';

describe('Lib57Demo5Component', () => {
  let component: Lib57Demo5Component;
  let fixture: ComponentFixture<Lib57Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
