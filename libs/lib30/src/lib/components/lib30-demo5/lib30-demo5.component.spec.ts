import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo5Component } from './lib30-demo5.component';

describe('Lib30Demo5Component', () => {
  let component: Lib30Demo5Component;
  let fixture: ComponentFixture<Lib30Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
