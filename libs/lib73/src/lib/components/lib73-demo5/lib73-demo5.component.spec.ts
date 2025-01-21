import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo5Component } from './lib73-demo5.component';

describe('Lib73Demo5Component', () => {
  let component: Lib73Demo5Component;
  let fixture: ComponentFixture<Lib73Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
