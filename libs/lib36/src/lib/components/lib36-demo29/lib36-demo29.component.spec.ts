import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo29Component } from './lib36-demo29.component';

describe('Lib36Demo29Component', () => {
  let component: Lib36Demo29Component;
  let fixture: ComponentFixture<Lib36Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
