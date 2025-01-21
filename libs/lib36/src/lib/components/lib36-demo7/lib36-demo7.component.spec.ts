import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo7Component } from './lib36-demo7.component';

describe('Lib36Demo7Component', () => {
  let component: Lib36Demo7Component;
  let fixture: ComponentFixture<Lib36Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
