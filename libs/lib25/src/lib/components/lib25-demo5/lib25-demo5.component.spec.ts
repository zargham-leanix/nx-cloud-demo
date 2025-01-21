import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo5Component } from './lib25-demo5.component';

describe('Lib25Demo5Component', () => {
  let component: Lib25Demo5Component;
  let fixture: ComponentFixture<Lib25Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
