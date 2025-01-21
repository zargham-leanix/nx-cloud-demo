import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo5Component } from './lib31-demo5.component';

describe('Lib31Demo5Component', () => {
  let component: Lib31Demo5Component;
  let fixture: ComponentFixture<Lib31Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
