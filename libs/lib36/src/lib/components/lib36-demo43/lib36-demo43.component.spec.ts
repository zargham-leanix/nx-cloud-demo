import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo43Component } from './lib36-demo43.component';

describe('Lib36Demo43Component', () => {
  let component: Lib36Demo43Component;
  let fixture: ComponentFixture<Lib36Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
