import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo48Component } from './lib36-demo48.component';

describe('Lib36Demo48Component', () => {
  let component: Lib36Demo48Component;
  let fixture: ComponentFixture<Lib36Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
