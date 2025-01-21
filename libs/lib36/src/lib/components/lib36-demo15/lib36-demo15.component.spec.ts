import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo15Component } from './lib36-demo15.component';

describe('Lib36Demo15Component', () => {
  let component: Lib36Demo15Component;
  let fixture: ComponentFixture<Lib36Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
