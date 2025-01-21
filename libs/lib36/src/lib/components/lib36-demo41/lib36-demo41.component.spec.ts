import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo41Component } from './lib36-demo41.component';

describe('Lib36Demo41Component', () => {
  let component: Lib36Demo41Component;
  let fixture: ComponentFixture<Lib36Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
