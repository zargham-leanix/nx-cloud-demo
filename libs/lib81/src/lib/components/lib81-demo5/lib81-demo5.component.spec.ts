import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo5Component } from './lib81-demo5.component';

describe('Lib81Demo5Component', () => {
  let component: Lib81Demo5Component;
  let fixture: ComponentFixture<Lib81Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
