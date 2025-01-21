import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo18Component } from './lib35-demo18.component';

describe('Lib35Demo18Component', () => {
  let component: Lib35Demo18Component;
  let fixture: ComponentFixture<Lib35Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
