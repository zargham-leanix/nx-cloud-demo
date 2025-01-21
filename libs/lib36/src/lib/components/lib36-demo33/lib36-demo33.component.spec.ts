import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo33Component } from './lib36-demo33.component';

describe('Lib36Demo33Component', () => {
  let component: Lib36Demo33Component;
  let fixture: ComponentFixture<Lib36Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
