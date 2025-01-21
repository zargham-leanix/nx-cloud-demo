import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo17Component } from './lib36-demo17.component';

describe('Lib36Demo17Component', () => {
  let component: Lib36Demo17Component;
  let fixture: ComponentFixture<Lib36Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
