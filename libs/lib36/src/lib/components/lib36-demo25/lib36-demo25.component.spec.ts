import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo25Component } from './lib36-demo25.component';

describe('Lib36Demo25Component', () => {
  let component: Lib36Demo25Component;
  let fixture: ComponentFixture<Lib36Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
