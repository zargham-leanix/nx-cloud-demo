import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo14Component } from './lib36-demo14.component';

describe('Lib36Demo14Component', () => {
  let component: Lib36Demo14Component;
  let fixture: ComponentFixture<Lib36Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
