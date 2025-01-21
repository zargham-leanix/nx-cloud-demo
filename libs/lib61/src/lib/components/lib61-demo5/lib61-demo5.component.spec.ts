import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo5Component } from './lib61-demo5.component';

describe('Lib61Demo5Component', () => {
  let component: Lib61Demo5Component;
  let fixture: ComponentFixture<Lib61Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
