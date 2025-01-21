import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo12Component } from './lib36-demo12.component';

describe('Lib36Demo12Component', () => {
  let component: Lib36Demo12Component;
  let fixture: ComponentFixture<Lib36Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
