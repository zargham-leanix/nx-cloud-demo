import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo3Component } from './lib36-demo3.component';

describe('Lib36Demo3Component', () => {
  let component: Lib36Demo3Component;
  let fixture: ComponentFixture<Lib36Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
