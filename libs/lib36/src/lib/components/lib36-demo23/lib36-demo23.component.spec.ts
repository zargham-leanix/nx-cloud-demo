import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo23Component } from './lib36-demo23.component';

describe('Lib36Demo23Component', () => {
  let component: Lib36Demo23Component;
  let fixture: ComponentFixture<Lib36Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
