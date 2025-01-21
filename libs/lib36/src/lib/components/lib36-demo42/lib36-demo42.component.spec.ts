import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo42Component } from './lib36-demo42.component';

describe('Lib36Demo42Component', () => {
  let component: Lib36Demo42Component;
  let fixture: ComponentFixture<Lib36Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
