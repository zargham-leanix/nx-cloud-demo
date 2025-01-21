import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo8Component } from './lib36-demo8.component';

describe('Lib36Demo8Component', () => {
  let component: Lib36Demo8Component;
  let fixture: ComponentFixture<Lib36Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
