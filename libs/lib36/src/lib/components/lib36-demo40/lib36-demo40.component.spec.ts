import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo40Component } from './lib36-demo40.component';

describe('Lib36Demo40Component', () => {
  let component: Lib36Demo40Component;
  let fixture: ComponentFixture<Lib36Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
