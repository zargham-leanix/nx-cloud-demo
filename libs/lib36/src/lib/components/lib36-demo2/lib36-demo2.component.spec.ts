import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo2Component } from './lib36-demo2.component';

describe('Lib36Demo2Component', () => {
  let component: Lib36Demo2Component;
  let fixture: ComponentFixture<Lib36Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
