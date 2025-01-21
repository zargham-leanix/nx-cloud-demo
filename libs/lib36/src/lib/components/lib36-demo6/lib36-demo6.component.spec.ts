import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo6Component } from './lib36-demo6.component';

describe('Lib36Demo6Component', () => {
  let component: Lib36Demo6Component;
  let fixture: ComponentFixture<Lib36Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
