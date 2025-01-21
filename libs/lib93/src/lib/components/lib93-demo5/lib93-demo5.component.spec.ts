import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo5Component } from './lib93-demo5.component';

describe('Lib93Demo5Component', () => {
  let component: Lib93Demo5Component;
  let fixture: ComponentFixture<Lib93Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
