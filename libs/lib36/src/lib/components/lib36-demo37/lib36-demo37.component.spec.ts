import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo37Component } from './lib36-demo37.component';

describe('Lib36Demo37Component', () => {
  let component: Lib36Demo37Component;
  let fixture: ComponentFixture<Lib36Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
