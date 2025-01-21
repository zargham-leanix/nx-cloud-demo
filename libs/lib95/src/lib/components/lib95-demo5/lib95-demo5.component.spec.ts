import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo5Component } from './lib95-demo5.component';

describe('Lib95Demo5Component', () => {
  let component: Lib95Demo5Component;
  let fixture: ComponentFixture<Lib95Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
