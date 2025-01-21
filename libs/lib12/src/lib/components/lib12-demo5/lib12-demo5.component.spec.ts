import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo5Component } from './lib12-demo5.component';

describe('Lib12Demo5Component', () => {
  let component: Lib12Demo5Component;
  let fixture: ComponentFixture<Lib12Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
