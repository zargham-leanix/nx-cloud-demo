import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo5Component } from './lib85-demo5.component';

describe('Lib85Demo5Component', () => {
  let component: Lib85Demo5Component;
  let fixture: ComponentFixture<Lib85Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
