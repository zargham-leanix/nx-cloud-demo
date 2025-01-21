import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo11Component } from './lib36-demo11.component';

describe('Lib36Demo11Component', () => {
  let component: Lib36Demo11Component;
  let fixture: ComponentFixture<Lib36Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
