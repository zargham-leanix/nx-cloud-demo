import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo45Component } from './lib36-demo45.component';

describe('Lib36Demo45Component', () => {
  let component: Lib36Demo45Component;
  let fixture: ComponentFixture<Lib36Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
