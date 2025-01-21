import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo5Component } from './lib50-demo5.component';

describe('Lib50Demo5Component', () => {
  let component: Lib50Demo5Component;
  let fixture: ComponentFixture<Lib50Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
