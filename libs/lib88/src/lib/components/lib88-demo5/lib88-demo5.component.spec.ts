import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo5Component } from './lib88-demo5.component';

describe('Lib88Demo5Component', () => {
  let component: Lib88Demo5Component;
  let fixture: ComponentFixture<Lib88Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
