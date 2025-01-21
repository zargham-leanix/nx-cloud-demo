import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo16Component } from './lib36-demo16.component';

describe('Lib36Demo16Component', () => {
  let component: Lib36Demo16Component;
  let fixture: ComponentFixture<Lib36Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
