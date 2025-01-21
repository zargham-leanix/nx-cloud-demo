import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo32Component } from './lib36-demo32.component';

describe('Lib36Demo32Component', () => {
  let component: Lib36Demo32Component;
  let fixture: ComponentFixture<Lib36Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
