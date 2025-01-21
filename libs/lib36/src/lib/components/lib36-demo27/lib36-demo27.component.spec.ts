import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo27Component } from './lib36-demo27.component';

describe('Lib36Demo27Component', () => {
  let component: Lib36Demo27Component;
  let fixture: ComponentFixture<Lib36Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
