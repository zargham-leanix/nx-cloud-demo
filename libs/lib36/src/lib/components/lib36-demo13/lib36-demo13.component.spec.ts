import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo13Component } from './lib36-demo13.component';

describe('Lib36Demo13Component', () => {
  let component: Lib36Demo13Component;
  let fixture: ComponentFixture<Lib36Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
