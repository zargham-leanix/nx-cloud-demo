import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo5Component } from './lib46-demo5.component';

describe('Lib46Demo5Component', () => {
  let component: Lib46Demo5Component;
  let fixture: ComponentFixture<Lib46Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
