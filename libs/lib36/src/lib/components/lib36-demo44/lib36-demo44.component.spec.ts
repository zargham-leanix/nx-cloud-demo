import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo44Component } from './lib36-demo44.component';

describe('Lib36Demo44Component', () => {
  let component: Lib36Demo44Component;
  let fixture: ComponentFixture<Lib36Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
