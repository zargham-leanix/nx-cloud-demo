import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo49Component } from './lib36-demo49.component';

describe('Lib36Demo49Component', () => {
  let component: Lib36Demo49Component;
  let fixture: ComponentFixture<Lib36Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
